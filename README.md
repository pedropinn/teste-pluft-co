## Iniciar db e api

#Baixar mongo db
docker pull mongo
docker run --name mongodb -p 27017:27017 -d mongo
docker ps -a (pausados)

#iniciar mongo db e rum api
cd E:\Projetos\pluft-co\api
docker start mongodb
npm rum devNode

## Iniciar React start
cd E:\Projetos\pluft-co\
npm rum start


{
  "name": "pluft-co",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "axios": "^0.18.0",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-router-dom": "^5.0.0",
    "react-scripts": "3.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
