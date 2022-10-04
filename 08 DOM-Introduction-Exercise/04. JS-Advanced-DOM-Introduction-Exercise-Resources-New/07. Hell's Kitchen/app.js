function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let result = [];
   function onClick() {

      let input = JSON.parse(document.getElementById("inputs").children[1].value);
      let bestResInfo = document.querySelector("#bestRestaurant p");
      let bestWorkers = document.querySelector("#workers p");

      for (const data of input) {
         let [name, workerList] = data.split(" - ");

         if (!result.find(e => e.name === name)) {
            result.push({
               name,
               avgSalary: 0,
               bestSalary: 0,
               sumSalary: 0,
               workerList: [],
            });
         }

         let currRes = result.find(e => e.name === name);
         workerList = workerList && workerList.split(", ");

         for (const currWorker of workerList) {
            updateRes(currRes, currWorker);
         }
      }

      let bestRes = result.sort((a, b) => b.avgSalary - a.avgSalary)[0];

      bestResInfo.textContent = `Name: ${bestRes.name} Average Salary: ${bestRes.avgSalary.toFixed(2)} Best Salary: ${bestRes.bestSalary.toFixed(2)}`;

      let sortWorkers = bestRes.workerList.sort((a, b) => b.salary - a.salary);

      let buff = "";
      for (const worker of sortWorkers) {
         buff += `Name: ${worker.name} With Salary: ${worker.salary} `;
      }

      bestWorkers.textContent = buff;
   }

   function updateRes(obj, worker) {
      let [name, salary] = worker.split(" ");
      salary = Number(salary);
      obj.sumSalary += salary;

      if (obj.bestSalary < salary) {
         obj.bestSalary = salary;
      }

      obj.workerList.push({
         name,
         salary,
      });

      obj.avgSalary = obj.sumSalary / obj.workerList.length;
   }
}