import json
import matplotlib.pyplot as plt

# importing averageDegreeObject.json
with open('degree distribution matching/couple of graphs/currentComparisonObject_coupleOfGraphs.json') as current_comparison_file:
  current_comparison = json.load(current_comparison_file)

# Extract the data that has to be plotted
x = current_comparison["arrayOfCliqueSizes"]
y_with_clique = current_comparison["graphsWithCliqueAverageDegreeArray"]
y_without_clique = current_comparison["graphsWithoutCliqueAverageDegreeArray"]
number_of_nodes = current_comparison["numberOfNodes"]
title_string = f"Average degree distribution for graphs of {number_of_nodes} nodes."

# Plot the data
plt.plot(x, y_with_clique, label="Graphs with clique")
plt.plot(x, y_without_clique, label="Graphs without clique (corrected)")
plt.xlabel("Clique Size")
plt.ylabel("Average Degree")
plt.title(title_string)
plt.legend()
plt.show()