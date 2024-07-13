import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Chargement des données
chemin_fichier = r"C:\Users\PC\Desktop\mes lecons\Epreuve interne\mon rapport\AMZN (1).csv" # Remplacez par le chemin réel de votre fichier CSV
donnees = pd.read_csv(chemin_fichier)
donnees['Date'] = pd.to_datetime(donnees['Date'])
donnees['Adj Close'] = pd.to_numeric(donnees['Adj Close'])

# Calcul de la volatilité annualisée
donnees['Rendements'] = donnees['Adj Close'].pct_change()
volatilite_annuelle = donnees['Rendements'].std() * np.sqrt(252)  # 252 jours de bourse

# Paramètres pour le modèle de Black-Scholes
taux_sans_risque = 0.05  # Taux sans risque annuel de 1%
sigma = volatilite_annuelle  # Volatilité
S0 = donnees['Adj Close'].iloc[0]  # Prix initial de l'action
n_jours = donnees.shape[0]  # Nombre de jours dans le jeu de données
delta_t = 1 / 252  # Pas de temps en années

# Génération des chocs aléatoires
#np.random.seed(42)  # Pour la reproductibilité
epsilon_t = np.random.normal(0, 1, n_jours)  # Chocs aléatoires d'une distribution normale standard

# Calcul des prix théoriques en utilisant le modèle de Black-Scholes
prix_black_scholes = [S0]
for i in range(1, n_jours):
    prix_precedent = prix_black_scholes[-1]
    derive = (taux_sans_risque - 0.5 * sigma**2) * delta_t
    choc = sigma * np.sqrt(delta_t) * epsilon_t[i]
    nouveau_prix = prix_precedent * np.exp(derive + choc)
    prix_black_scholes.append(nouveau_prix)

# Mise à jour du DataFrame avec les prix de Black-Scholes
donnees['Prix Black-Scholes'] = prix_black_scholes

# Tracé des prix réels et des prix simulés par Black-Scholes
plt.figure(figsize=(14, 7))
plt.plot(donnees['Date'], donnees['Adj Close'], label='Prix Réels (Adj Close)', linewidth=2)
plt.plot(donnees['Date'], donnees['Prix Black-Scholes'], label='Prix Théoriques Black-Scholes', linestyle='--', color='green')
plt.title('Comparaison des Prix Réels et Théoriques des Actions Amazon')
plt.xlabel('Date')
plt.ylabel('Prix (USD)')
plt.legend()
plt.grid(True)
plt.show()
