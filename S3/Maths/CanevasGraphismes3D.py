from tkinter import *
import numpy as np
import time
import os 

#-----------------Variables globales---------------

#temps, angles, etc
t = 0

    
#--------------détection des événements clavier/souris--------------

#inutile pour l'instant


#----------------------Gestion de la fenêtre graphique----------------------

root = Tk()#création de la fenêtre
#os.system('xset r on')
can = Canvas( root, width=1600, height=800 )#réglage de la taille de la fenêtre
#can.bind_all("<KeyPress>",press)#lie la fenêtre aux événement clavier
#can.bind_all("<KeyRelease>",release)#lie la fenêtre aux événement clavier
#init()#condition initiales du jeu
#T = Text(root, height=2, width=40)
#T.pack()
#T.insert(END, "Use arrow keys to move green point\nUse space bar to initialize position\n")#manuel utilisateur affiché à l'écran
can.pack()

can.configure(bg="white")


#-------------------fonction de distance-----------------------

def distance(xA,xB,yA,yB,zA,zB):
  return np.sqrt((xB-xA)**2+(yB-yA)**2+(zB-zA)**2)
  
#-----------------------Fonction de translation----------------

def translation(nodes,vecteur):
  for i in range(len(nodes[0])):
    nodes[0][i] += vecteur[0]
    nodes[1][i] += vecteur[1]
    nodes[2][i] += vecteur[2]
  return nodes

#---------------------Fonctions de rotation-----------------

def rotationx(nodes,angle):
  rotx = np.array([ [1,0,0],
                    [0,np.cos(np.radians(angle)),-np.sin(np.radians(angle))],
                    [0,np.sin(np.radians(angle)),np.cos(np.radians(angle))],
                  ])
  return np.dot(rotx, nodes)
  
def rotationy(nodes,angle):
  roty = np.array([ [np.cos(np.radians(angle)),0,np.sin(np.radians(angle))],
                    [0,1,0],
                    [-np.sin(np.radians(angle)),0,np.cos(np.radians(angle))],
                  ])
  return np.dot(roty, nodes)

def rotationz(nodes,angle):
  rotz = np.array([ [np.cos(np.radians(angle)),-np.sin(np.radians(angle)), 0],
                    [np.sin(np.radians(angle)),np.cos(np.radians(angle)),0],
                    [0,0,1],
                  ])
  return np.dot(rotz, nodes)

#-----------------------Focntion de zoom------------------- 

def zoom(nodes, p):
  z=np.array([
    [p/100,0,0],
    [0,p/100,0],
    [0,0,p/100]
  ])
  return np.dot(z,nodes)

#-----------------------Création du cube-------------------

cube_nodes = np.array([[1,1,1,1,-1,-1,-1,-1],
                        [1,1,-1,-1,1,1,-1,-1],
                        [1,-1,1,-1,1,-1,1,-1],
                      ])

cube_edges = []

for i in range(8):
  cube_edges.append([False,False,False,False,False,False,False,False])

for i in range(8):
  for j in range(8):
    if distance(cube_nodes[0][i], cube_nodes[0][j], cube_nodes[1][i], cube_nodes[1][j], cube_nodes[2][i], cube_nodes[2][j]) == 2:
      cube_edges[i][j]=True
      
cube_nodes = zoom(cube_nodes, 10000)
cube_nodes=translation(cube_nodes, [800, 400,0]) 

for i in range(8):
  print(cube_edges[i])

for i in range(3):
  print(cube_nodes[i])
 

#----------------------Création de l'icosaêdre----------------


#-------------------Fonction de dessin d'une figure-------------------------

def taux(t):
  return 100+np.cos(t)

def dessine(nodes,edges):
  for i in range(len(nodes[0])):
    for j in range(i+1, len(nodes[0])):
      if edges[i][j]:
        can.create_line(nodes[0][i], nodes[1][i], nodes[0][j], nodes[1][j])

                    
                                             



#-----------------------BOUCLE D'ANIMATION----------------------------------
while True: 
  
    time.sleep(0.005)#contrôle de l'écoulement du temps
    t+=0.01
    
    
    #clearscreen
    root.update()
    can.delete(ALL)

    
        
    #Affichage et transformation d'objets
    cube_nodes=translation(cube_nodes, [-800, -400,0])
    cube_nodes=rotationx(cube_nodes,1)
    cube_nodes=rotationy(cube_nodes,1)
    cube_nodes=rotationz(cube_nodes,1)
    #cube_nodes=zoom(cube_nodes, taux(t))
    cube_nodes=translation(cube_nodes, [800, 400,0])
    dessine(cube_nodes, cube_edges)
    
      


#juste pour mémoire de la syntaxe    
    #can.delete(mobile)
    #mobile = can.create_oval(x(t)-10,y(t)-10,x(t)+10,y(t)+10, fill='green')

   
    
             
    
    
    
    

