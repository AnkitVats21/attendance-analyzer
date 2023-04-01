import redis
import json

r = redis.Redis(host='localhost', port=6379, db=0)
p = r.pubsub()
p.subscribe('student_count')

strength = {}
count = {}


def update_average(key, value):
    if key not in strength:
        strength[key] = value
        count[key] = 1
    else:
        strength[key] += value
        count[key] += 1


def get_average(key):
    return int(strength[key] / count[key])


def reset():
    for i in count:
        count[i] = 1


for message in p.listen():

    if message['type'] == 'message':
        data = json.loads(message['data'].decode())
        for camera in data:
            update_average(camera, data[camera])

    total_strength = 0
    for key in strength:
        avg = get_average(key)
        total_strength+=avg
        # print(key, " ", avg)
    print(total_strength)