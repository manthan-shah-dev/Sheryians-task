const loginform = document.querySelector('.login-form')
const Registerform = document.querySelector('#Register-form')
const setting = document.querySelector('.setting')
const transaction = document.querySelector('.transaction')

// Dashboard
const Dashboard = document.querySelector('Dashboard')
const overViewCards = document.querySelectorAll('.overView-cards .card')
const balance = overViewCards[0].querySelector('h3')
const income = overViewCards[1].querySelector('h3')
const Expense = overViewCards[2].querySelector('h3')
const noTransaction = overViewCards[3].querySelector('h3')



// typeFilter
let typefilterinput = 'all'
const typeFilter = document.querySelector("#typeFilter")
const searchInput = document.querySelector("#searchInput")

// settingForm


const settingForm = document.querySelector('.settingForm')

// resetDataBtn
const resetDataBtn = document.querySelector('#resetDataBtn')

// Graph
const ctx = document.querySelector('#transactionChart')
let transactionChart;

// Update index
let updateIndex = null
let transactionArray = []


const overal = document.querySelector('.overal')
const page2 = document.querySelector('.page2')


// darkModeToggle

const darkModeToggle = document.getElementById("darkModeToggle");


function applyDarkMode(isDark) {

    if (isDark) {

        document.body.style.backgroundColor = "#111827";
        document.body.style.color = "#f3f4f6";

        document.querySelector("nav").style.backgroundColor = "#1f2937";

        document.querySelector("side").style.backgroundColor = "#1f2937";
        document.querySelector(".section-1").style.backgroundColor = "#111827";

        document.querySelectorAll(".serach,.card, .table-container,.graph, .Preferences, .table,.Logout,table").forEach(element => {
            element.style.backgroundColor = "#1f2937";
            element.style.color = "#f3f4f6";
        })

    } else {
        document.body.style.backgroundColor = "#f8f9fb";
        document.body.style.color = "#111827";

        document.querySelector(".section-1").style.backgroundColor = "#f8f9fb";
        document.querySelector("nav").style.backgroundColor = "#ffffff";

        document.querySelector("side").style.backgroundColor = "#ffffff";

        document.querySelectorAll(".serach,.card,.table-container, .graph, .Preferences, .table,.Logout,table").forEach(element => {
            element.style.backgroundColor = "#ffffff";
            element.style.color = "#111827";
        });
    }
}

darkModeToggle.addEventListener("change", function () {

    userDetail[detailindex].dark = this.checked;

    localStorage.setItem(
        "userDetails",
        JSON.stringify(userDetail)
    );

    applyDarkMode(this.checked);
});
// transaction
const closebtn = document.querySelector('.closebtn')
const Transactionform = document.querySelector('.Transactionform')

// navbar
const userName = document.querySelector("#username")
const logout = document.querySelector('.Logout')


// sider bar
const Dashboardbtn = document.querySelector('.Dashboardbtn')
const settingbtn = document.querySelector('.settingbtn')
const transactionbtn = document.querySelector('.transactionbtn')

const table = document.querySelector('table')




const userDetail = JSON.parse(localStorage.getItem('userDetails')) || [];

// Login and Register
const Login = document.querySelector('#Login')
const Register = document.querySelector('#Register')
const loginbtn = document.querySelectorAll('.Switch')
let check = true
let detailindex = null

loginbtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()

        if (Login.style.display === 'none') {
            Login.style.display = 'block'
            Register.style.display = 'none'
        } else {
            Register.style.display = 'block'
            Login.style.display = 'none'
        }
    })
})

loginform.addEventListener('submit', (e) => {
    e.preventDefault()
    let username = e.target[0].value
    let password = e.target[1].value
    check = true
    userDetail.forEach((ele, index) => {
        if (username == ele.username && password == ele.password) {
            Dashboard.style.display = 'block'
            overal.style.display = 'block'
            page2.style.display = 'none'
            check = false
            detailindex = index
            userName.textContent = ele.username;
            //Transactionarray
            transactionArray = userDetail[detailindex].transactions || [];

            updateUI(transactionArray)
            darkModeToggle.checked = ele.dark || false;
            applyDarkMode(ele.dark || false);
        }
    })
    if (check) { alert('Invalid username or password.') }
    loginform.reset()

})


const updateDashboard = (transactionfilter) => {
    userName.textContent = userDetail[detailindex].username;

    let { totalIncome, totalExpense, count } = totalIncomeExp(transactionfilter);


    let currentBalance = totalIncome - totalExpense;

    income.textContent =
        `${userDetail[detailindex].currency}${totalIncome.toFixed(2)}`;

    Expense.textContent =
        `${userDetail[detailindex].currency}${totalExpense.toFixed(2)}`;

    balance.textContent =
        `${userDetail[detailindex].currency}${currentBalance.toFixed(2)}`;
    noTransaction.textContent = count
}





Registerform.addEventListener('submit', (e) => {

    e.preventDefault()
    let username = e.target[0].value
    let password = e.target[1].value
    let return1 = userDetail.some((ele) => ele.username == username);
    if (return1) {
        alert('Username already exists! Please choose another');
        return
    }
    if (username.trim() == '' ||
        password.trim() == '') {
        alert('Enter the all the details ')
        return
    }
    alert('Registration successful! You can now log in.')
    Registerform.reset()
    let obj = {
        username,
        password,
        currency: "$",
        transactions: [],
        dark: false

    }
    Login.style.display = "block"
    Register.style.display = "none"
    userDetail.push(obj)

    localStorage.setItem("userDetails", JSON.stringify(userDetail))

})

// all button
Dashboardbtn.addEventListener('click', () => {
    Dashboard.style.display = 'block'
    setting.style.display = 'none'

})
settingbtn.addEventListener('click', () => {
    setting.style.display = 'block'
    Dashboard.style.display = 'none'

})
transactionbtn.addEventListener('click', () => {
    updateIndex = null
    Transactionform.reset();
    Transactionform.elements[5].textContent = 'Add Transaction'
    transaction.style.display = 'flex'

})

logout.addEventListener('click', () => {

    overal.style.display = 'none'
    page2.style.display = 'flex'

    darkModeToggle.checked = false;
    applyDarkMode(false);
})

closebtn.addEventListener('click', () => {
    transaction.style.display = 'none'

})




const totalIncomeExp = (transactions) => {
    let totalIncome = 0;
    let totalExpense = 0;
    let count = 0;
    transactions.forEach((Element) => {

        count++;
        if (Element.type === "income") {
            totalIncome += Number(Element.amount);
        }

        else if (Element.type === "expense") {
            totalExpense += Number(Element.amount);
        }
    });
    return {
        totalExpense,
        totalIncome, count
    };
}
const tabledatainsertion = (transactionArray) => {
    table.innerHTML = ''
    table.innerHTML = `<tr>
                                        <th>DATE</th>
                                        <th>DESCRIPTION</th>
                                        <th>CATEGORY</th>
                                        <th>AMOUNT</th>
                                        <th>ACTIONS</th>
                                    </tr>`
    transactionArray.forEach((Element) => {
        table.innerHTML += `<tr>
                                        <td>${Element.Date}</td>
                                        <td>${Element.description}</td>
                                        <td>${Element.category}</td>
                                         <td style="color: ${Element.type === 'income' ? 'green' : 'red'}">${Element.type === 'income' ? '+' : '-'}${userDetail[detailindex].currency}${Element.amount}</td>
                   <td> <button class="action-btn btn-edit" onclick="editTransaction(${Element.transactionId})" style="color: blueviolet; border: none;margin-right: 10px;   padding:2px; background:transparent; cursor: pointer;"><i class="fa-solid fa-pen"></i></button>
                    <button class="action-btn btn-delete"  style="color: red; border: none; padding:2px;  background:transparent;   cursor: pointer; onclick="deleteTransaction(${Element.transactionId})"><i class="fa-solid fa-trash""></i></button>
                </td>`
    })
}


function createChart(transactions) {

    if (transactionChart) {
        transactionChart.destroy();
    }



    let labels = transactions.map(transaction => transaction.Date);


    let incomeData = transactions.map(transaction =>
        transaction.type === "income" ? Number(transaction.amount) : 0
    );

    let expenseData = transactions.map(transaction =>
        transaction.type === "expense" ? Number(transaction.amount) : 0
    );


    transactionChart = new Chart(ctx, {
        type: "bar",

        data: {
            labels: labels
            ,
            datasets: [
                {
                    label: "Income",
                    data: incomeData,
                    backgroundColor: "#166534"
                },
                {
                    label: "Expenses",
                    data: expenseData,
                    backgroundColor: "#991b1b"
                }
            ]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

const updateUI = (transactions = transactionArray) => {
    updateDashboard(transactions);
    createChart(transactions);
    tabledatainsertion(transactions);
};

// deleteTransaction
const deleteTransaction = (id) => {

    let index = transactionArray.findIndex(t => String(t.transactionId) === String(id))
    if (index === -1) return
    transactionArray.splice(index, 1)

    userDetail[detailindex].transactions = transactionArray


    updateUI(transactionArray)

    localStorage.setItem(
        "userDetails",
        JSON.stringify(userDetail)
    )
}

// editTransaction
const editTransaction = (id) => {

    let index = transactionArray.findIndex(t => String(t.transactionId) === String(id))
    if (index === -1) {
        return;
    }
    updateIndex = index
    let data = transactionArray[index];
    transaction.style.display = 'flex'
    Transactionform.elements[0].value = data.type;
    Transactionform.elements[1].value = data.description;
    Transactionform.elements[2].value = data.amount;
    Transactionform.elements[3].value = data.Date;
    Transactionform.elements[4].value = data.category;
    Transactionform.elements[5].textContent = 'Update Transaction'


}





// transaction form
Transactionform.addEventListener('submit', (e) => {
    e.preventDefault()
    let type = e.target[0].value
    let description = e.target[1].value
    let transactionDate = e.target[3].value
    let amount = Number(e.target[2].value);
    let category = e.target[4].value
    if (
        description.trim() === '' ||
        transactionDate === '' ||
        amount <= 0 ||
        category.trim() === ''
    ) {
        alert("Please enter valid transaction details.")
        return
    }
    
    transaction.style.display = 'none'
    let obj = {
        transactionId: updateIndex !== null
            ? transactionArray[updateIndex].transactionId :
            Date.now(),
        type,
        amount,
        description,
        Date: transactionDate,
        category
    };
    if (updateIndex !== null) {





        // replace transaction
        transactionArray[updateIndex] = obj

        // add new transaction

        updateIndex = null
    }

    else {


        transactionArray.push(obj)
        // trnas(type, amount)


    }
    Transactionform.reset()
    Transactionform.elements[5].textContent = 'Add Transaction';
    updateUI(transactionArray)

    userDetail[detailindex].transactions = transactionArray;

    localStorage.setItem(
        "userDetails",
        JSON.stringify(userDetail)
    );
})





// settingForm
settingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let username = e.target[0].value
    let currency = e.target[1].value
    if (username.trim() !== '') {
        userDetail[detailindex].username = username
    }
    userDetail[detailindex].currency = currency
    updateUI()
    localStorage.setItem("userDetails", JSON.stringify(userDetail))

})


resetDataBtn.addEventListener('click', () => {
    let confirmReset = confirm("Are you sure you want to delete all transactions?");

    if (!confirmReset) {
        return;
    }

    transactionArray = []

    userDetail[detailindex].transactions = transactionArray

    localStorage.setItem(
        "userDetails",
        JSON.stringify(userDetail)
    )

    updateUI(transactionArray)
})


// typeFilter
function filterTransactions() {

    let search = searchInput.value.toLowerCase();
    let filtered = transactionArray.filter(t => {

        let searchMatch =
            t.description.toLowerCase().includes(search) ||
            t.category.toLowerCase().includes(search);

        let typeMatch =
            typefilterinput === 'all' ||
            t.type === typefilterinput;

        return searchMatch && typeMatch;
    });

    updateUI(filtered);
}

typeFilter.addEventListener('change', (e) => {
    e.preventDefault()
    typefilterinput = e.target.value

    filterTransactions()
})

searchInput.addEventListener('input', (e) => {
    filterTransactions()
}
)