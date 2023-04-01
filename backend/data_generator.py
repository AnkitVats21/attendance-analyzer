import time
import random
import redis
import json
from datetime import datetime
# connect to Redis server
redis_conn = redis.Redis(host='localhost', port=6379, db=0)




# loop forever
while True:
    # generate data for each camera
    lst = []
    for i in range(1, 10):
        data = {}
        data['name'] = datetime.now().strftime("%M:%S")
        data['uv'] = random.randint(2000, 5000)
        data['pv'] = random.randint(2000, 5000)
        data['amt'] = random.randint(3000, 7500)
        time.sleep(1)
        lst.append(data)
        # camera_id = f"camera_{i}"
        # strength = random.randint(45, 75)
        # data[camera_id]=strength

    # send data to Redis server
    redis_conn.set('count', json.dumps(lst))

    # wait for two second before sending the next data
    # time.sleep(1)
