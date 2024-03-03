import requests

class TrafficTracking:
    def __init__(self):
        self.url = "https://api.transport.nsw.gov.au/v1/roads/spatial/"
        self.api_key = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJNV0N1OHNGYk1pUXJWemhqeUxRSVpqTG1rd1ZlX2FUY2o2SDhGMmhkQkY4IiwiaWF0IjoxNzA5MzUwNzQ5fQ.OV2AGoRCXwjh_AgH4sdjUavERWEAB7f8HiUT4IMffQY"
        
    def get_traffic_data(self):
        headers = {
            "Authorization" : f"apikey {self.api_key}"
        }
        params = {
            "format" : "csv",
            "filename" : "traffic_data.csv",
            "q" : "SELECT * FROM road_traffic_counts_hourly_permanent LIMIT 10"
        }
        response = requests.get(self.url, headers=headers, params=params)
        print(response)

if __name__ == "__main__":
    traffic = TrafficTracking()
    traffic.get_traffic_data()