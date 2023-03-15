import json
import matplotlib.pyplot as plt

# importing averageDegreeObject.json
with open('degree distribution matching/currentComparison.json') as current_comparison_file:
  current_comparison = json.load(current_comparison_file)

# Extract the data that has to be plotted
x = current_comparison["arrayOfCliqueSizes"]
y_uncorrected = current_comparison["uncorrectedGraphsAverageDegreeArray"]
y_corrected = current_comparison["correctedGraphsAverageDegreeArray"]
number_of_nodes = current_comparison["numberOfNodes"]
title_string = f"Average degree distribution for graphs of {number_of_nodes} nodes."

# Plot the data
plt.plot(x, y_uncorrected, label="Uncorrected graphs")
plt.plot(x, y_corrected, label="Corrected graphs")
plt.xlabel("Clique Size")
plt.ylabel("Average Degree")
plt.title(title_string)
plt.legend()
plt.show()