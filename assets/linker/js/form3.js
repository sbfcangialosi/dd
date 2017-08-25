$('#signup-form')
  .form({
    name: {
      identifier  : 'name',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter your name'
        }
      ]
    },
    email: {
      identifier : 'email',
      rules: [
        {
          type   : 'empty',
          prompt : "Please enter an email address"
        },
        {
          type : 'email',
          prompt : 'Please enter a valid email address'
        }
      ]
    },
    phone: {
      identifier : 'phone',
      rules: [
        {
          type : 'empty',
          prompt : "Please enter a phone number"
        }
      ]
    },
    companyName : {
      identifier : 'companyName',
      rules : [
        {
          type : 'empty',
          prompt : 'Please enter the name of the company you are ordering for'
        }
      ]
    }
  })
;
$('#admin-signup-form')
  .form({
    name: {
      identifier  : 'name',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter your name'
        }
      ]
    },
    email: {
      identifier : 'email',
      rules: [
        {
          type   : 'empty',
          prompt : "Please enter an email address"
        },
        {
          type : 'email',
          prompt : 'Please enter a valid email address'
        }
      ]
    },
    password: {
      identifier : 'password',
      rules: [
        {
          type : 'empty',
          prompt : "Please enter a phone number"
        },
        {
          type : 'length[8]',
          prompt : "Your password must be at least 8 characters long"
        }
      ]
    }
  })
;
$('#virtual-signup-form')
  .form({
    name: {
      identifier  : 'name',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter your name'
        }
      ]
    },
    email: {
      identifier : 'email',
      rules: [
        {
          type   : 'empty',
          prompt : "Please enter an email address"
        },
        {
          type : 'email',
          prompt : 'Please enter a valid email address'
        }
      ]
    }
  })
;
$('#signin-form').form({
  email : {
    identifier : 'email',
    rules : [
    {
      type : 'empty',
      prompt : 'Please enter an email address'
    },
    {
      type : 'email',
      prompt : 'Please enter a valid email address'
    }
    ]
  }
});
$('#admin-form').form({
  email : {
    identifier : 'email',
    rules : [
    {
      type : 'empty',
      prompt : 'Please enter a username'
    },
    ]
  },
  password : {
    identifier : 'password',
    rules : [
    {
      type : 'empty',
      prompt : 'Please enter a password'
    }
    ]
  }
});
$('#new-delivery-form')
  .form({
    contactName: {
      identifier  : 'name',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter the name of who we can contact regarding your order'
        }
      ]
    },
    contactPhone : {
      identifier : 'phone',
      rules : [
        {
          type : 'empty',
          prompt : 'Please enter a the phone number of who we can contact regarding your order'
        },
        {
          type : 'phone',
          prompt : 'Please enter a valid phone number'
        }
      ]
    },
    deliveryAddress: {
      identifier : 'address',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter a delivery address'
        }
      ]
    },
    deliveryCity: {
      identifier : 'city',
      rules: [
        {
          type : 'empty',
          prompt : 'Please enter the city name'
        }
      ]
    }
  })
;
$('#select-delivery-form')
  .form({
    time : {
      identifier : 'time',
      rules : [
        {
          type : 'not[-1]',
          prompt : 'Please choose a time for your delivery!'
        },
        {
          type   : 'empty',
          prompt : 'Please choose a time for your delivery!'
        }
      ]
    },
    date : {
      identifier : 'date',
      rules : [
        {
          type : 'not[-1]',
          prompt : 'Please choose a date for your delivery!'
        },
        {
          type   : 'empty',
          prompt : 'Please choose a date for your delivery!'
        }
      ]
    },
    deliveryIndex : {
      identifier : 'deliveryIndex',
      rules : [
        {
          type : 'not[-1]',
          prompt : 'Please choose a location or add a new one!'
        },
        {
          type   : 'empty',
          prompt : 'Please choose a location or add a new one!'
        }
      ]
    }
  })
;
$('#select-payment-form')
  .form({
    paymentIndex : {
      identifier : 'paymentIndex',
      rules : [
        {
          type : 'not[-1]',
          prompt : 'Please choose a payment method or add a new one!'
        }
      ]
    }
  })
;
$('#card-form')
  .form({
    number: {
      identifier  : 'number',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter your credit card number'
        },
        {
          type   : 'maxLength[19]',
          prompt : 'Please enter a valid credit card number'
        },
        {
          type   : 'length[12]',
          prompt : 'Please enter a valid credit card number'
        }
      ]
    },
    name: {
      identifier  : 'name',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter your name as it appears on your card'
        }
      ]
    },
    expiry: {
      identifier : 'expiry',
      rules: [
        {
          type   : 'empty',
          prompt : "Please enter the experation date of your credit card"
        },
        {
          type   : 'maxLength[9]',
          prompt : 'Please make sure you entered a valid experation date!'
        }
      ]
    },
    cvc : {
      identifier : 'cvc',
      rules : [
        {
          type : 'empty',
          prompt : 'Please enter the CVC code on the back of your card'
        },
        {
          type   : 'maxLength[4]',
          prompt : 'Your CVC code should not be longer than 4 numbers'
        }
      ]
    },
		zip : {
			identifier : 'zip',
			rules : [
				{
					type : 'empty',
					prompt : 'Please enter the billing ZIP code for your card'
				},
				{
					type : 'maxLength[5]',
					prompt : 'Your billing ZIP code should not be longer than 5 numbers'
				}
			]
		}
  })
;

$('#virtualcafe-form')
  .form({
    name: {
      identifier  : 'name',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter your name'
        }
      ]
    },
    email: {
      identifier : 'email',
      rules: [
        {
          type   : 'empty',
          prompt : "Please enter an email address"
        },
        {
          type : 'email',
          prompt : 'Please enter a valid email address'
        }
      ]
    },
    phone: {
      identifier : 'phone',
      rules: [
        {
          type : 'empty',
          prompt : "Please enter a phone number"
        },
        {
          type : 'length[9]',
          prompt : 'Please enter a valid phone number (XXX-XXX-XXXX)'
        }
      ]
    },
    date : {
      identifier : 'date',
      rules : [
        {
          type : 'empty',
          prompt : 'Please select a date for your order'
        }
      ]
    },
    location : {
      identifier : 'location',
      rules : [
        {
          type : 'empty',
          prompt : 'Please select your location'
        }
      ]
    },
    card_number : {
      identifier : 'number',
      rules : [
        {
          type : 'empty',
          prompt : 'Please enter a credit card number'
        }
      ]
    },
    card_name : {
      identifier : 'card_name',
      rules : [
        {
          type : 'empty',
          prompt : 'Please enter your full name as it appears on your card'
        }
      ]
    },
    expiry : {
      identifier : 'expiry',
      rules : [
        {
          type : 'empty',
          prompt : 'Please enter the expiration date on your credit card'
        }
      ]
    },
    cvc : {
      identifier : 'cvc',
      rules : [
        {
          type : 'empty',
          prompt : 'Please enter the CVC code on the back of your credit card'
        }
      ]
    },
    zip : {
      identifier : 'zip',
      rules : [
        {
          type : 'empty',
          prompt : 'Please enter the billing ZIP code for your credit card'
        }
      ]
    }
  })
;
