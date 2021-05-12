// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = ``;

export class Customer {
  constructor(
    public id: number,
    public name: string,
    public analysis_type: string
  ) {}
}

const DuplicateDecisions = [
  new Customer(33833, 'Wichmann Entenspezialitäten GmbH', 'cc'),
  new Customer(33819, 'Wichmann Entenspezialitäten GmbH', 'pc'),
  new Customer(33819, 'Wichmann Entenspezialitäten GmbH', 'cc'),
  new Customer(33819, 'Wichmann Entenspezialitäten GmbH', 'cc'),
  new Customer(33820, 'Mundi Pharma', 'pc')
];

const distinctDecisions = {};
const distictUserandDecisions = [];
DuplicateDecisions.forEach(customer => {
  let users = distictUserandDecisions.filter(user => user.id === customer.id);
  if (users.length > 0) {
    var usersOldInfo = users[0];
    var prevAnalysises = usersOldInfo['analysis'];
    var analysisListforCurrent = prevAnalysises.filter(analysis=>analysis === customer.analysis_type)
    if(analysisListforCurrent==0){
     prevAnalysises.push(customer.analysis_type);
    usersOldInfo['analysis'] = prevAnalysises;
    }
   
  } else {
    distictUserandDecisions.push({
      id: customer.id,
      name: customer.name,
      analysis: [customer.analysis_type]
    });
  }
});

const distinctAnalysisType = DuplicateDecisions.filter(
  (customer, i, arr) => arr.findIndex(t => t.id === customer.id) === i
);

// // Map distinctAnalysisType and distinctDecisions
// const mergeDecisions = distinctAnalysisType.map( id  => {
//   const otherDecision = distinctDecisions.find(element => element.id ===id.id)
//   return {id,otherDecision}
// })

appDiv.innerHTML += `<li>${JSON.stringify(distictUserandDecisions)}</li>`;
