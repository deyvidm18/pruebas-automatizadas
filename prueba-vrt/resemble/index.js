const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { viewportHeight, viewportWidth, browsers, options } = config;

async function executeTest(){
    if(browsers.length === 0){
      return;
    }
    let resultInfo = {}
    let datetime = new Date().toISOString().replace(/:/g,".");
	let nameList = "";
	for(let j=0; j<=1; j++){
		let nameFile = ordenFile(j);
		let val = (j == 0 ? 6 : 5);
		for(let i=0; i<= val; i++){ 
			let event = evaluateCase(i, j);
			const data = await compareImages(
        		fs.readFileSync(`./results/screenshots/${nameFile}.js/${event}-first.png`),
        		fs.readFileSync(`./results/screenshots/${nameFile}_new.js/${event}-new.png`),
        		options
    		);
    		resultInfo[i] = {
       			isSameDimensions: data.isSameDimensions,
       			dimensionDifference: data.dimensionDifference,
       			rawMisMatchPercentage: data.rawMisMatchPercentage,
       			misMatchPercentage: data.misMatchPercentage,
       			diffBounds: data.diffBounds,
       			analysisTime: data.analysisTime
    		}	
    		fs.writeFileSync(`./results/screenshots/results-admin/compare-${event}.png`, data.getBuffer());
			fs.writeFileSync(`./results/screenshots/results-admin/report-post-${event}.html`, createReport(datetime, resultInfo[i], event, nameFile));
			nameList += `<li><a href=report-post-${event}.html>report-post-` + event + `</li>`;
		}
	}
	fs.writeFileSync(`./results/screenshots/results-admin/index.html`, createIndex(nameList));
	fs.copyFileSync('./index.css', `./results/screenshots/results-admin/index.css`);

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;  
  }
(async ()=>console.log(await executeTest()))();

function evaluateCase(i, j){
	let name = "";
	if(j == 0){
		switch(i){
			case 0:
				name="create-post";
				break;
			case 1:
				name="create-staff";
				break;
			case 2:
				name="create-tags";
				break;
			case 3:
				name="create-web-page";
				break;
			case 4:
				name="general";
				break;
			case 5:
				name="ingress";
				break;
			case 6:
				name="login";
				break;
		}
	}
	if(j == 1){
		switch(i){
			case 0:
				name="author";
				break;
			case 1:
				name="help";
				break;
			case 2:
				name="home";
				break;
			case 3:
				name="ingress";
				break;
			case 4:
				name="login";
				break;
			case 5:
				name="tag";
				break;
		}
	}
	return name;
}

function ordenFile(j){
	let file = "";
	switch(j){
		case 0:
			file="caso_print_screen_admin";
			break;
		case 1:
			file="caso_prueba_home";
			break;	
	}
	return file;
}

function browser(b, info, event, nameFile){
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Browser: ${b}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="../${nameFile}.js/${event}-first.png" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="../${nameFile}_new.js/${event}-new.png" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare-${event}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

function createReport(datetime, resInfo, event, nameFile){
    return `
    <html>
        <head>
            <title> VRT Report ${event}</title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for ${event} </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${config.browsers.map(b=>browser(b, resInfo[b], event, nameFile))}
            </div>
        </body>
    </html>`
}

function createIndex(nameList){
	return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report de Eventos Cypress por Deyvid Martínez y William Sánchez | MISO</h1>
			<ul>
				${nameList}
			</ul
        </body>
    </html>`
}