### Follow the steps to setup WDA in your local machine

##### Install Yeoman

```npm install -g yo```

----------------------------------------------------------------

##### Jhipster

github repository: [generator-jhipster](https://github.com/rohithteja-cmi/generator-jhipster)

```npm install && npm link```

Verify installation using below commands

```jhipster --version```

```jhipster --install-path```

----------------------------------------------------------------

##### WDI-TF

github repository: [generator-tf-wdi](https://github.com/coMakeIT-TIC/generator-tf-wdi)

```npm i && npm link```

Verify installation

run ```yo``` command, Tf Wdi should be listed

----------------------------------------------------------------

##### Blueprints

github repository: [jhipster-blueprints](https://github.com/coMakeIT-TIC/jhipster-blueprints)

go to generator-jhipster-gomicro

update generator-jhipster dependency path in package.json to your local source directory

```npm install && npm link```

Verification

```jhipster --blueprints go```

----------------------------------------------------------------

##### WDA Server

github repository: [wda-server](https://github.com/coMakeIT-TIC/wda-server)

```npm install && npm start```

server will be accessible on http://localhost:3001

health endpoint - http://localhost:3001/health

----------------------------------------------------------------

##### WDA UI

github repository: [wda-ui](https://github.com/coMakeIT-TIC/wda-ui)

```npm install && npm start```

server will be accessible on http://localhost:3000

----------------------------------------------------------------
