import numpy as np
import matplotlib.pyplot as plt

# Définir les paramètres
T = 1  # Temps total
n = 1000  # Nombre d'incréments
dt = T / n  # Pas de temps
M = 3  # Nombre de trajectoires

# Question 1: Utilisez la fonction de la bibliothèque numpy : np.random.normal(0, 1, n) pour générer n échantillons de variables gaussiennes centrées réduites.
gaussian_samples = np.random.normal(0, 1, n)

# Question 2: Implémentez la méthode de Box-Muller en Python.
def box_muller(n):
    u1 = np.random.rand(n)
    u2 = np.random.rand(n)
    z0 = np.sqrt(-2 * np.log(u1)) * np.cos(2 * np.pi * u2)
    return z0
box_muller_samples = box_muller(n)

# Question 3: Comparer les résultats obtenus avec la méthode de NumPy et celle de Box-Muller.
plt.hist(gaussian_samples, bins=30, alpha=0.5)
plt.title('Echantillons gaussiens générés par NumPy')
plt.show()
plt.hist(box_muller_samples, bins=30, alpha=0.5)
plt.title('Echantillons gaussiens générés par Box-Muller')
plt.show()
plt.legend()

# Question 4: Utilisez les propriétés des incréments pour générer M trajectoires d'un mouvement brownien.
def generate_brownian_paths(M, n, dt):
    paths = np.zeros((M, n + 1))
    for i in range(M):
        increments = np.random.normal(0, np.sqrt(dt), n)
        paths[i, 1:] = np.cumsum(increments)
    return paths

brownian_paths = generate_brownian_paths(M, n, dt)

# Tracer les trajectoires générées du mouvement brownien
for i in range(M):
    plt.plot(np.linspace(0, T, n + 1), brownian_paths[i])
plt.title('Trajectoires du mouvement brownien')
plt.xlabel('Temps')
plt.ylabel('B(t)')
plt.grid(True)
plt.show()
