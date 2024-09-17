var menuData = [
    {
        menu_name: "Dashboard",
        page_name: "charts_dashboard",
        page_url: "dashboard.generaldashboard",
        new_url: "/dashboard",
        sub_categories: [
            {
                menu_name: "Load Card",
                page_name: "loadcard",
                page_url: "dashboard.generaldashboard",
                new_url: "/bulkload/0/0"
            },
            {
                menu_name: "Fund Profile",
                page_name: "fundprofile",
                page_url: "dashboard.generaldashboard",
                new_url: "/orderfunds"
            },
            {
                menu_name: "Active Cards",
                page_name: "activecards",
                page_url: "dashboard.generaldashboard",
                new_url: "/allocatedcards"
            },
            {
                menu_name: "Activate Cards",
                page_name: "activatecards",
                page_url: "dashboard.generaldashboard",
                new_url: "/cardinventory"
            },
            {
                menu_name: "Order Cards",
                page_name: "ordercards",
                page_url: "dashboard.generaldashboard",
                new_url: "/cardorder"
            },
            {
                menu_name: "Training Videos",
                page_name: "trainingvids",
                page_url: "dashboard.generaldashboard",
                new_url: "/trainingvideos"
            },
        ]
    },
    {
        menu_name: "Quick Card Search",
        page_name: "quick_card_search",
        page_url: "dashboard.clientquickcardsearch",
        new_url: "/quicksearch",
        sub_categories: [] 
    },
    {
        menu_name: "Card Management",
        page_name: "cardmanagement",
        page_url: "",
        new_url: "",
        sub_categories: [
            {
                menu_name: "Active Cards",
                page_name: "activeCards",
                page_url: "dashboard.allocatedcardsd",
                new_url: "/allocatedcards"
            },
            {
                menu_name: "Inactive Cards",
                page_name: "inactivecards",
                page_url: "dashboard.cardsinventory",
                new_url: "/cardinventory"
            },]
        },
        {
            menu_name: "Batch Processing",
            page_name: "batch_processing",
            page_url: "",
            new_url: "",
            sub_categories: [
                {
                    menu_name: "Batch-Card Load",
                    page_name: "batch_card_load",
                    page_url: "dashboard.bulkLoadpage",
                    new_url: "/bulkload/0/0"
                },
                {
                    menu_name: "Batch-Card Load Reversed",
                    page_name: "batch_card_load_reversed",
                    page_url: "dashboard.bulkdeductpage",
                    new_url: "/bulkdeduct/0/0"
                },
                {
                    menu_name: "Batch-Enable Cards",
                    page_name: "batch_enable_cards",
                    page_url: "dashboard.bulkcancelstopcardspage",
                    new_url: "/bulkcancelstopcard/0/0"
                },
                {
                    menu_name: "Batch-Disable Cards",
                    page_name: "batch_disable_cards",
                    page_url: "dashboard.bulkstopcardspage",
                    new_url: "/bulkstopcard/0/0"
                },
                {
                    menu_name: "Batch-Card to Card Transfer",
                    page_name: "batch_card_to_card_transfer",
                    page_url: "dashboard.cardtocard",
                    new_url: "/cardholderverification"
                },
                {
                    menu_name: "Batch-Card Replacement",
                    page_name: "batch_card_replacement",
                    page_url: "dashboard.cardreplacement",
                    new_url: "/cardreplacement/0/0"
                }
            ]
    },
    {
            menu_name: "Card Actions",
            page_name: "card_actions",
            page_url: "",
            new_url: "",
            sub_categories: [
                {
                    menu_name: "Card Load(Profile to Card)",
                    page_name: "card_load_profile_to_card",
                    page_url: "dashboard.cardactionloadfunds",
                    new_url: "/loadfunds/:0/:0"
                },
                {
                    menu_name: "Card Reversal(Card to Profile)",
                    page_name: "card_reversal_card_to_profile",
                    page_url: "dashboard.cardactionremovefunds",
                    new_url: "/removefunds/0/0"
                },
                {
                    menu_name: "Card Transfer(Card to Card)",
                    page_name: "card_transfer_card_to_card",
                    page_url: "dashboard.cardactiontransferfunds",
                    new_url: "/transferfunds/0/0"
                },
                {
                    menu_name: "Card Balance",
                    page_name: "card_balance",
                    page_url: "dashboard.cardactionretrievebalance",
                    new_url: "/retrievebalance/0/0"
                },
                {
                    menu_name: "Card Statement",
                    page_name: "card_statement",
                    page_url: "dashboard.cardactionstatement",
                    new_url: "/statement/0/0"
                },
                {
                    menu_name: "Enable Card",
                    page_name: "enable_card",
                    page_url: "dashboard.cardactioncancelstopcard",
                    new_url: "/cancelstopcard/0/0"
                },
                {
                    menu_name: "Disable Card",
                    page_name: "disable_card",
                    page_url: "dashboard.cardactionstopcard",
                    new_url: "/stopcard/0/0"
                },
                {
                    menu_name: "Reset Card Pin",
                    page_name: "reset_card_pin",
                    page_url: "dashboard.cardactionresetpin",
                    new_url: "/resetpin/0/0"
                },
                {
                    menu_name: "Linked Wallets",
                    page_name: "linked_wallets",
                    page_url: "dashboard.virtualwallet",
                    new_url: "/linkedwallet"
                },
                {
                    menu_name: "Hidden Cards",
                    page_name: "hidden_cards",
                    page_url: "dashboard.hiddencards",
                    new_url: "/hiddencard"
                },
                {
                    menu_name: "Expired Cards",
                    page_name: "expired_cards",
                    page_url: "dashboard.expiredcards",
                    new_url: "/expired_cards"
                }
            ]
    },
    {
        menu_name: "Reports",
        page_name: "reports",
        page_url: "",
        new_url: "",
        sub_categories: [
                {
                    menu_name: "Profile Statement",
                    page_name: "profile_statement",
                    page_url: "dashboard.profilestatement",
                    new_url: "/profilestatement"
                },
                {
                    menu_name: "Fee Statement",
                    page_name: "fee_statement",
                    page_url: "dashboard.feestatement",
                    new_url: "/feestatement"
                },
                {
                    menu_name: "Card Status Report",
                    page_name: "card_status_report",
                    page_url: "dashboard.inventoryreport",
                    new_url: "/cardstatusreport"
                },
                {
                    menu_name: "Activity Report",
                    page_name: "activity_report",
                    page_url: "dashboard.activityreport",
                    new_url: "/activityreport"
                },
                {
                    menu_name: "Card Balance",
                    page_name: "card_balance",
                    page_url: "dashboard.profileCardBalances",
                    new_url: "/balancestatement"
                },
                {
                    menu_name: "Wallet Balance",
                    page_name: "wallet_balance",
                    page_url: "dashboard.profileCardBalances",
                    new_url: "/loademail"
                }
            ]
    },
    {
            menu_name: "Monthly Deduction",
            page_name: "monthly_deduction",
            page_url: "",
            new_url: "",
            sub_categories: [
                {
                    menu_name: "Debit Order Rejection",
                    page_name: "debit_order_rejection",
                    page_url: "dashboard.debitOrderRejection",
                    new_url: "/debitorder"
                },
                {
                    menu_name: "Monthly Activate Card Fee",
                    page_name: "monthly_activate_card_fee",
                    page_url: "dashboard.activeCardFee",
                    new_url: "/monthlyactivecardfee"
                },
                {
                    menu_name: "Monthly 7th Statement",
                    page_name: "monthly_7th_statement",
                    page_url: "dashboard.monthlyCardStatement",
                    new_url: "/monthstatement"
                }
            ]
    }
        
        

        

    
];

function generateMenu() {
    var menuHTML = '';
    menuData.forEach(function(menuItem) {
      menuHTML += '<div class="option" onclick="toggleSubOptions(\'' + menuItem.page_name + '\')">' + menuItem.menu_name + '</div>';
      menuHTML += '<div id="' + menuItem.page_name + '" class="sub-options" style="display: none;">';
      menuItem.sub_categories.forEach(function(subMenuItem) {
        menuHTML += '<div class="sub-option" onclick="navigateTo(\'' + subMenuItem.new_url + '\')">' + subMenuItem.menu_name + '</div>';
      });
      menuHTML += '</div>';
    });
    document.getElementById('bot-container').innerHTML = menuHTML;
  }

function toggleBot() {
    var botContainer = document.getElementById('bot-container');
    if (botContainer.style.display === 'block') {
      botContainer.style.display = 'none';
    } else {
      botContainer.style.display = 'block';
    }
  }

  function toggleSubOptions(pageName) {
    var subOptions = document.getElementById(pageName);
    if (subOptions.style.display === 'block') {
      subOptions.style.display = 'none';
    } else {
      subOptions.style.display = 'block';
    }
  }

  function navigateTo(url) {
    window.location.href = url;
  }

generateMenu();

document.getElementById('bot-icon').addEventListener('click', toggleBot);
