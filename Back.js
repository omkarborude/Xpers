

        // get the heading element
        const headingEL = document.querySelector("#headingTotal");

        // get the reference to disc element
        const inputDescEL = document.querySelector("#inputDesc");

        // ref. to input amount 
        const inputElement = document.querySelector("#inputAmount");

        // Get the ref table here
        const expenseTablEL = document.querySelector("#expenseTable");


        // init value of expense at 
        let totalExpense = 0;

        // set heading element to total expenses
        headingEL.textContent = totalExpense;

        // allExpenses at once place
        const allExpenses = [];

      
        //onButtonClick add inputamount to totalexpense
                function addExpenseToTotal(){

                            const expenseItem = {};

                       //read value from input amount
                            const textAmount = inputElement.value;

                        // read the desc from inputDdesc
                            const textDesc = inputDescEL.value;


                       // convert it to number
                             const expense = parseInt(textAmount, 10);

                       // put it in object
                            expenseItem.desc = textDesc;
                            expenseItem.amount = expense;
                            expenseItem.moment = new Date();


                            allExpenses.push(expenseItem);

                            

                        //add that value to totalExpense
                             totalExpense = totalExpense + expense;

                        // set heading element to totalexpenses

                             const someText = `Total: ${totalExpense}`
                             headingEL.textContent = someText;

                        

                        const allExpensesHTML = allExpenses.map(expense => 
                                creatListItem(expense));
						
                         
     

                        const joinedAllExpenseHTML = allExpensesHTML.join("");

                        console.log(joinedAllExpenseHTML);

                         expenseTablEL.innerHTML = joinedAllExpenseHTML;



        }

           
         

        // Get the button element
        const element = document.querySelector("#btnAddExpense");
        
        // Lisen to click event
        element.addEventListener("click", addExpenseToTotal, false);

        // Get Date String
        function getDateString(moment){
            return moment.toLocaleDateString (`en-US`,{
                                year: `numeric`,
                                month: `long`,
                                day: `numeric`,
                                })

            
        }


        function creatListItem({ desc,  amount, moment }){
            return`
            <li class="list-group-item d-flex justify-content-between">
							<div class="d-flex flex-column">
								${desc}
								<small class="text-muted">${getDateString(moment)}</small>
							</div>
							<div>
								<span class="px-5">
									${amount}
								</span>
								<button type="button" class="btn btn-outline-danger btn-sm">
									<i class="fas fa-trash-alt"></i>
								</button>
							</div>
						</li>
                        `;
        }


        

       
