from flask import Flask, request, jsonify
from sklearn.cluster import DBSCAN
from sklearn.preprocessing import StandardScaler
import numpy as np

app = Flask(__name__)

data = np.loadtxt(open("data.csv", "rb"), delimiter=",", skiprows=1)
# make this the actual data

clustered_data = {}
clustered_lbms = []

target_lbm = 10

# change this to number of features
number_of_features = 3


@app.route('/predict_net_changes', methods=['POST'])
def handle_prediction():

    posted_checkin_data = request.get_json()
    print(posted_checkin_data)

    most_recent_checkin_data = [posted_checkin_data[key]
                                for key in posted_checkin_data]

    net_changes = fit_predict(most_recent_checkin_data)

    counter = 0
    labeled_net_changes = {}

    copy_of_posted_checkin_data = posted_checkin_data

    del copy_of_posted_checkin_data['lbm']

    for key in copy_of_posted_checkin_data:
        labeled_net_changes[key] = net_changes[counter]
        counter += 1

    return jsonify(labeled_net_changes)

    # put all functions for prediction in here


def initalize_dbscan_classifier():
    scaler = StandardScaler()
    data_scaled = scaler.fit_transform(data)

    global dbscan
    global clusters
    dbscan = DBSCAN(eps=0.123, min_samples=2)
    clusters = dbscan.fit_predict(data_scaled)
    return


def fit_predict(most_recent_checkin_data):
    for cluster_label in clusters:
        clustered_data[cluster_label] = np.empty((0, number_of_features), int)

    for index, cluster_label in enumerate(clusters):
        clustered_data[cluster_label] = np.append(
            clustered_data[cluster_label], data[index].reshape(1, -1), axis=0)

    for key in clustered_data:
        clustered_data[key] = np.mean(clustered_data[key], axis=0)

    for key in clustered_data:
        clustered_lbms.append([key, clustered_data[key][-1]])

    lbm_differences = [[entry[0], np.abs(target_lbm - entry[1])]
                       for entry in clustered_lbms]

    lbm_differences_sorted = sorted(
        lbm_differences, key=lambda a_entry: a_entry[1])

    closest_lbm_data_without_lbm = clustered_data[lbm_differences_sorted[0][0]][:-1]

    most_recent_checkin_data_without_lbm = most_recent_checkin_data[:-1]

    net_changes = [matched_data - our_data for matched_data, our_data in zip(
        closest_lbm_data_without_lbm, most_recent_checkin_data_without_lbm)]

    print(net_changes)
    return net_changes


if __name__ == '__main__':
    initalize_dbscan_classifier()

    app.run(port=80)