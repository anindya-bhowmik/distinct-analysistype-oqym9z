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
DuplicateDecisions.forEach(customer => {
  if (!distinctDecisions.hasOwnProperty(customer.id)) {
    distinctDecisions[customer.id] = {
      decisions: [customer.analysis_type]
    };
  } else {
    if (
      !distinctDecisions[customer.id]['decisions'].includes(
        customer.analysis_type
      )
    ) {
      distinctDecisions[customer.id]['decisions'].push([
        customer.analysis_type
      ]);
    }
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

appDiv.innerHTML += `<li>${JSON.stringify(distinctDecisions)}</li>`;
