# features = ["age",'hypertension', 'heart_disease', 'ever_married', 'work_type']

# aaa = rf_classifier.predict([[65,1,1,1,4]])
# print("Aaa: ",aaa)

import sys
import pickle
import json

# Check if the argument is passed
if len(sys.argv) > 1:
    # Load the argument (assuming it's a JSON string)
    input_data = json.loads(sys.argv[1])

    # Your existing code
    pickle_in = open("C:/Users/seba/Desktop/coding/licenta/health-bridge/backend/classifier.pkl", "rb")
    pickle_scaler = pickle.load(pickle_in)
    auxpre = pickle_scaler.predict([input_data])
    print(auxpre[0])
else:
    print("No input data provided.")