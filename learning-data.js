const DEXTRA_LEARNING_DATA = {
  testingCategories: [
    {
      id: "bac",
      code: "BAC",
      title: "Business Administration Core",
      source: "https://www.decaplus.org/exams/business-administration-core",
      overview:
        "Foundational business concepts used across principles events and many other competitive tracks.",
      visual: "bac",
      icon: "assets/category-icons/chart-radar.svg",
      chapters: [
        {
          id: "bac-customer-relations",
          title: "Customer Relations",
          lessons:             [
              {
                "id": "bac-core-1",
                "title": "Communication and Professionalism",
                "terms": [
                  {
                    "term": "active listening",
                    "definition": "giving full attention, asking clarifying questions, and confirming understanding"
                  },
                  {
                    "term": "paraphrasing",
                    "definition": "restating a message in your own words to confirm meaning"
                  },
                  {
                    "term": "formal communication",
                    "definition": "workplace communication that follows official channels and accepted structure"
                  },
                  {
                    "term": "nonverbal communication",
                    "definition": "messages sent through facial expression, posture, gestures, or tone"
                  }
                ],
                "questions": [
                  {
                    "prompt": "A service representative pauses their work, lets a customer finish explaining, and asks one clarifying question before responding. Which communication skill is being used?",
                    "choices": [
                      "Price lining",
                      "Inventory control",
                      "Mass marketing",
                      "Active listening"
                    ],
                    "answer": 3,
                    "focusTerm": "active listening",
                    "source": "Dextra original practice",
                    "sourceQuestion": 1
                  },
                  {
                    "prompt": "During a team meeting, Maya takes notes and confirms the speaker’s main concern before suggesting a solution. What is Maya practicing?",
                    "choices": [
                      "Inventory control",
                      "Mass marketing",
                      "Active listening",
                      "Price lining"
                    ],
                    "answer": 2,
                    "focusTerm": "active listening",
                    "source": "Dextra original practice",
                    "sourceQuestion": 2
                  },
                  {
                    "prompt": "A cashier repeats the issue, checks the receipt, and asks whether the customer wants a refund or exchange. Which skill best fits this behavior?",
                    "choices": [
                      "Mass marketing",
                      "Active listening",
                      "Price lining",
                      "Inventory control"
                    ],
                    "answer": 1,
                    "focusTerm": "active listening",
                    "source": "Dextra original practice",
                    "sourceQuestion": 3
                  },
                  {
                    "prompt": "A manager listens without interrupting while an employee explains why a deadline was missed. What communication behavior is strongest here?",
                    "choices": [
                      "Active listening",
                      "Price lining",
                      "Inventory control",
                      "Mass marketing"
                    ],
                    "answer": 0,
                    "focusTerm": "active listening",
                    "source": "Dextra original practice",
                    "sourceQuestion": 4
                  },
                  {
                    "prompt": "A sales associate focuses on a shopper’s full explanation before recommending a product. Which skill is the associate demonstrating?",
                    "choices": [
                      "Price lining",
                      "Inventory control",
                      "Mass marketing",
                      "Active listening"
                    ],
                    "answer": 3,
                    "focusTerm": "active listening",
                    "source": "Dextra original practice",
                    "sourceQuestion": 5
                  },
                  {
                    "prompt": "An employee says, “So you need the delivery moved to Friday because your event changed.” Which technique is the employee using?",
                    "choices": [
                      "Benchmarking",
                      "Product bundling",
                      "Paraphrasing",
                      "Prospecting"
                    ],
                    "answer": 2,
                    "focusTerm": "paraphrasing",
                    "source": "Dextra original practice",
                    "sourceQuestion": 6
                  },
                  {
                    "prompt": "A team leader restates a coworker’s idea in simpler language before the group votes. What is the leader doing?",
                    "choices": [
                      "Product bundling",
                      "Paraphrasing",
                      "Prospecting",
                      "Benchmarking"
                    ],
                    "answer": 1,
                    "focusTerm": "paraphrasing",
                    "source": "Dextra original practice",
                    "sourceQuestion": 7
                  },
                  {
                    "prompt": "A support agent says, “You were charged twice for one order, and you want the duplicate removed.” Which communication method is this?",
                    "choices": [
                      "Paraphrasing",
                      "Prospecting",
                      "Benchmarking",
                      "Product bundling"
                    ],
                    "answer": 0,
                    "focusTerm": "paraphrasing",
                    "source": "Dextra original practice",
                    "sourceQuestion": 8
                  },
                  {
                    "prompt": "A receptionist summarizes a parent’s scheduling problem before checking available class times. What technique is being used?",
                    "choices": [
                      "Prospecting",
                      "Benchmarking",
                      "Product bundling",
                      "Paraphrasing"
                    ],
                    "answer": 3,
                    "focusTerm": "paraphrasing",
                    "source": "Dextra original practice",
                    "sourceQuestion": 9
                  },
                  {
                    "prompt": "A trainer says, “You are asking for a slower pace and more examples.” Which response technique does this show?",
                    "choices": [
                      "Benchmarking",
                      "Product bundling",
                      "Paraphrasing",
                      "Prospecting"
                    ],
                    "answer": 2,
                    "focusTerm": "paraphrasing",
                    "source": "Dextra original practice",
                    "sourceQuestion": 10
                  },
                  {
                    "prompt": "A company sends an official policy update through its employee portal. What type of workplace communication is this?",
                    "choices": [
                      "Informal credit",
                      "Formal communication",
                      "Impulse buying",
                      "Viral marketing"
                    ],
                    "answer": 1,
                    "focusTerm": "formal communication",
                    "source": "Dextra original practice",
                    "sourceQuestion": 11
                  },
                  {
                    "prompt": "A supervisor submits a written incident report using the company’s required form. Which communication category applies?",
                    "choices": [
                      "Formal communication",
                      "Impulse buying",
                      "Viral marketing",
                      "Informal credit"
                    ],
                    "answer": 0,
                    "focusTerm": "formal communication",
                    "source": "Dextra original practice",
                    "sourceQuestion": 12
                  },
                  {
                    "prompt": "An HR department emails a benefits reminder using approved company language and channels. What is this an example of?",
                    "choices": [
                      "Impulse buying",
                      "Viral marketing",
                      "Informal credit",
                      "Formal communication"
                    ],
                    "answer": 3,
                    "focusTerm": "formal communication",
                    "source": "Dextra original practice",
                    "sourceQuestion": 13
                  },
                  {
                    "prompt": "A store manager posts the official holiday schedule in the staff system. Which communication type is being used?",
                    "choices": [
                      "Viral marketing",
                      "Informal credit",
                      "Formal communication",
                      "Impulse buying"
                    ],
                    "answer": 2,
                    "focusTerm": "formal communication",
                    "source": "Dextra original practice",
                    "sourceQuestion": 14
                  },
                  {
                    "prompt": "A project lead sends a meeting agenda to all team members through the company platform. Which term best describes the communication?",
                    "choices": [
                      "Informal credit",
                      "Formal communication",
                      "Impulse buying",
                      "Viral marketing"
                    ],
                    "answer": 1,
                    "focusTerm": "formal communication",
                    "source": "Dextra original practice",
                    "sourceQuestion": 15
                  },
                  {
                    "prompt": "A customer crosses their arms and avoids eye contact while listening to a return policy. What kind of message is the customer sending?",
                    "choices": [
                      "Nonverbal communication",
                      "Trade credit",
                      "Cost accounting",
                      "Market research"
                    ],
                    "answer": 0,
                    "focusTerm": "nonverbal communication",
                    "source": "Dextra original practice",
                    "sourceQuestion": 16
                  },
                  {
                    "prompt": "A presenter smiles, stands upright, and gestures toward the chart while speaking. Which communication channel supports the message?",
                    "choices": [
                      "Trade credit",
                      "Cost accounting",
                      "Market research",
                      "Nonverbal communication"
                    ],
                    "answer": 3,
                    "focusTerm": "nonverbal communication",
                    "source": "Dextra original practice",
                    "sourceQuestion": 17
                  },
                  {
                    "prompt": "A customer’s confused facial expression tells the employee to explain the instructions again. What type of cue is being read?",
                    "choices": [
                      "Cost accounting",
                      "Market research",
                      "Nonverbal communication",
                      "Trade credit"
                    ],
                    "answer": 2,
                    "focusTerm": "nonverbal communication",
                    "source": "Dextra original practice",
                    "sourceQuestion": 18
                  },
                  {
                    "prompt": "A team member nods during a discussion to show agreement without speaking. Which term describes this signal?",
                    "choices": [
                      "Market research",
                      "Nonverbal communication",
                      "Trade credit",
                      "Cost accounting"
                    ],
                    "answer": 1,
                    "focusTerm": "nonverbal communication",
                    "source": "Dextra original practice",
                    "sourceQuestion": 19
                  },
                  {
                    "prompt": "A rushed tone makes an apology sound less sincere even though the words are polite. What type of communication affected the message?",
                    "choices": [
                      "Nonverbal communication",
                      "Trade credit",
                      "Cost accounting",
                      "Market research"
                    ],
                    "answer": 0,
                    "focusTerm": "nonverbal communication",
                    "source": "Dextra original practice",
                    "sourceQuestion": 20
                  }
                ]
              },
              {
                "id": "bac-core-2",
                "title": "Customer Relations",
                "terms": [
                  {
                    "term": "customer expectation",
                    "definition": "what a customer believes should happen during a product or service experience"
                  },
                  {
                    "term": "service recovery",
                    "definition": "actions a business takes to fix a customer problem after a mistake"
                  },
                  {
                    "term": "customer loyalty",
                    "definition": "a customer’s preference for continuing to buy from or use the same business"
                  },
                  {
                    "term": "customer complaint",
                    "definition": "feedback that identifies dissatisfaction with a product or service"
                  }
                ],
                "questions": [
                  {
                    "prompt": "A restaurant promises ten-minute pickup, so guests arrive expecting their food to be ready quickly. What did the promise create?",
                    "choices": [
                      "Cash discount",
                      "Trade barrier",
                      "Fixed asset",
                      "Customer expectation"
                    ],
                    "answer": 3,
                    "focusTerm": "customer expectation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 21
                  },
                  {
                    "prompt": "A website states that returns are free, so buyers assume they will not pay return shipping. Which term describes this assumption?",
                    "choices": [
                      "Trade barrier",
                      "Fixed asset",
                      "Customer expectation",
                      "Cash discount"
                    ],
                    "answer": 2,
                    "focusTerm": "customer expectation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 22
                  },
                  {
                    "prompt": "A gym advertises spotless locker rooms, so members expect them to be clean every visit. What is being set?",
                    "choices": [
                      "Fixed asset",
                      "Customer expectation",
                      "Cash discount",
                      "Trade barrier"
                    ],
                    "answer": 1,
                    "focusTerm": "customer expectation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 23
                  },
                  {
                    "prompt": "A class reminder says students need goggles, so families arrive prepared. What did the message create?",
                    "choices": [
                      "Customer expectation",
                      "Cash discount",
                      "Trade barrier",
                      "Fixed asset"
                    ],
                    "answer": 0,
                    "focusTerm": "customer expectation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 24
                  },
                  {
                    "prompt": "A delivery app shows a 30-minute estimate, so customers plan around that timing. Which concept is involved?",
                    "choices": [
                      "Cash discount",
                      "Trade barrier",
                      "Fixed asset",
                      "Customer expectation"
                    ],
                    "answer": 3,
                    "focusTerm": "customer expectation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 25
                  },
                  {
                    "prompt": "A hotel moves a guest to a quieter room after a noise complaint and adds reward points. What is the hotel practicing?",
                    "choices": [
                      "Inventory shrinkage",
                      "Price skimming",
                      "Service recovery",
                      "Market penetration"
                    ],
                    "answer": 2,
                    "focusTerm": "service recovery",
                    "source": "Dextra original practice",
                    "sourceQuestion": 26
                  },
                  {
                    "prompt": "A store replaces a damaged item and apologizes for the inconvenience. Which customer-service process is this?",
                    "choices": [
                      "Price skimming",
                      "Service recovery",
                      "Market penetration",
                      "Inventory shrinkage"
                    ],
                    "answer": 1,
                    "focusTerm": "service recovery",
                    "source": "Dextra original practice",
                    "sourceQuestion": 27
                  },
                  {
                    "prompt": "A restaurant remakes an incorrect meal and removes it from the bill. What is the business doing?",
                    "choices": [
                      "Service recovery",
                      "Market penetration",
                      "Inventory shrinkage",
                      "Price skimming"
                    ],
                    "answer": 0,
                    "focusTerm": "service recovery",
                    "source": "Dextra original practice",
                    "sourceQuestion": 28
                  },
                  {
                    "prompt": "A company offers a credit after missing its installation window. Which term best describes the action?",
                    "choices": [
                      "Market penetration",
                      "Inventory shrinkage",
                      "Price skimming",
                      "Service recovery"
                    ],
                    "answer": 3,
                    "focusTerm": "service recovery",
                    "source": "Dextra original practice",
                    "sourceQuestion": 29
                  },
                  {
                    "prompt": "A swim school schedules a free makeup lesson after canceling a class too late. What process does this show?",
                    "choices": [
                      "Inventory shrinkage",
                      "Price skimming",
                      "Service recovery",
                      "Market penetration"
                    ],
                    "answer": 2,
                    "focusTerm": "service recovery",
                    "source": "Dextra original practice",
                    "sourceQuestion": 30
                  },
                  {
                    "prompt": "A family renews lessons every season because the instructors remember their child’s goals. What relationship outcome is shown?",
                    "choices": [
                      "Invoice aging",
                      "Customer loyalty",
                      "Depreciation",
                      "Scarcity"
                    ],
                    "answer": 1,
                    "focusTerm": "customer loyalty",
                    "source": "Dextra original practice",
                    "sourceQuestion": 31
                  },
                  {
                    "prompt": "A shopper chooses the same shoe brand even when a competitor is cheaper. Which concept explains the behavior?",
                    "choices": [
                      "Customer loyalty",
                      "Depreciation",
                      "Scarcity",
                      "Invoice aging"
                    ],
                    "answer": 0,
                    "focusTerm": "customer loyalty",
                    "source": "Dextra original practice",
                    "sourceQuestion": 32
                  },
                  {
                    "prompt": "A customer recommends the same barber to friends and keeps booking appointments. What does this demonstrate?",
                    "choices": [
                      "Depreciation",
                      "Scarcity",
                      "Invoice aging",
                      "Customer loyalty"
                    ],
                    "answer": 3,
                    "focusTerm": "customer loyalty",
                    "source": "Dextra original practice",
                    "sourceQuestion": 33
                  },
                  {
                    "prompt": "A member waits for their favorite trainer instead of choosing any available coach. Which result is strongest?",
                    "choices": [
                      "Scarcity",
                      "Invoice aging",
                      "Customer loyalty",
                      "Depreciation"
                    ],
                    "answer": 2,
                    "focusTerm": "customer loyalty",
                    "source": "Dextra original practice",
                    "sourceQuestion": 34
                  },
                  {
                    "prompt": "A subscriber stays with a service because support is consistently helpful. What is the company building?",
                    "choices": [
                      "Invoice aging",
                      "Customer loyalty",
                      "Depreciation",
                      "Scarcity"
                    ],
                    "answer": 1,
                    "focusTerm": "customer loyalty",
                    "source": "Dextra original practice",
                    "sourceQuestion": 35
                  },
                  {
                    "prompt": "A buyer emails that their order arrived late and asks the business to fix the issue. What has the buyer submitted?",
                    "choices": [
                      "Customer complaint",
                      "Capital budget",
                      "Sales forecast",
                      "Operating lease"
                    ],
                    "answer": 0,
                    "focusTerm": "customer complaint",
                    "source": "Dextra original practice",
                    "sourceQuestion": 36
                  },
                  {
                    "prompt": "A guest tells the front desk that the room was not cleaned properly. Which type of customer feedback is this?",
                    "choices": [
                      "Capital budget",
                      "Sales forecast",
                      "Operating lease",
                      "Customer complaint"
                    ],
                    "answer": 3,
                    "focusTerm": "customer complaint",
                    "source": "Dextra original practice",
                    "sourceQuestion": 37
                  },
                  {
                    "prompt": "A parent reports that the class schedule shown online was incorrect. What is this message?",
                    "choices": [
                      "Sales forecast",
                      "Operating lease",
                      "Customer complaint",
                      "Capital budget"
                    ],
                    "answer": 2,
                    "focusTerm": "customer complaint",
                    "source": "Dextra original practice",
                    "sourceQuestion": 38
                  },
                  {
                    "prompt": "A shopper says the checkout process charged the wrong price. Which term describes the feedback?",
                    "choices": [
                      "Operating lease",
                      "Customer complaint",
                      "Capital budget",
                      "Sales forecast"
                    ],
                    "answer": 1,
                    "focusTerm": "customer complaint",
                    "source": "Dextra original practice",
                    "sourceQuestion": 39
                  },
                  {
                    "prompt": "A customer explains that a support representative never called back. What type of feedback is being shared?",
                    "choices": [
                      "Customer complaint",
                      "Capital budget",
                      "Sales forecast",
                      "Operating lease"
                    ],
                    "answer": 0,
                    "focusTerm": "customer complaint",
                    "source": "Dextra original practice",
                    "sourceQuestion": 40
                  }
                ]
              },
              {
                "id": "bac-core-3",
                "title": "Finance and Economics",
                "terms": [
                  {
                    "term": "opportunity cost",
                    "definition": "the value of the next-best option given up when a choice is made"
                  },
                  {
                    "term": "scarcity",
                    "definition": "the condition of having limited resources compared with unlimited wants"
                  },
                  {
                    "term": "profit margin",
                    "definition": "the percentage of sales revenue left after costs are subtracted"
                  },
                  {
                    "term": "credit terms",
                    "definition": "the conditions under which payment is due for borrowed money or purchases on account"
                  }
                ],
                "questions": [
                  {
                    "prompt": "A student spends Saturday working instead of attending a tournament. What is the tournament in this decision?",
                    "choices": [
                      "Sales tax",
                      "Net worth",
                      "Brand equity",
                      "Opportunity cost"
                    ],
                    "answer": 3,
                    "focusTerm": "opportunity cost",
                    "source": "Dextra original practice",
                    "sourceQuestion": 41
                  },
                  {
                    "prompt": "A business chooses to use its display window for new shoes instead of winter coats. What is the value of the coat display called?",
                    "choices": [
                      "Net worth",
                      "Brand equity",
                      "Opportunity cost",
                      "Sales tax"
                    ],
                    "answer": 2,
                    "focusTerm": "opportunity cost",
                    "source": "Dextra original practice",
                    "sourceQuestion": 42
                  },
                  {
                    "prompt": "A manager assigns staff to inventory counting, so they cannot help with a promotion. What concept describes the forgone promotion work?",
                    "choices": [
                      "Brand equity",
                      "Opportunity cost",
                      "Sales tax",
                      "Net worth"
                    ],
                    "answer": 1,
                    "focusTerm": "opportunity cost",
                    "source": "Dextra original practice",
                    "sourceQuestion": 43
                  },
                  {
                    "prompt": "A club spends its budget on travel and cannot buy new banners. What is the banner option?",
                    "choices": [
                      "Opportunity cost",
                      "Sales tax",
                      "Net worth",
                      "Brand equity"
                    ],
                    "answer": 0,
                    "focusTerm": "opportunity cost",
                    "source": "Dextra original practice",
                    "sourceQuestion": 44
                  },
                  {
                    "prompt": "A customer uses savings for a laptop instead of a vacation. What is the vacation in economic terms?",
                    "choices": [
                      "Sales tax",
                      "Net worth",
                      "Brand equity",
                      "Opportunity cost"
                    ],
                    "answer": 3,
                    "focusTerm": "opportunity cost",
                    "source": "Dextra original practice",
                    "sourceQuestion": 45
                  },
                  {
                    "prompt": "A store has only three employees available but ten tasks to complete before opening. Which economic condition is shown?",
                    "choices": [
                      "Equity financing",
                      "Price lining",
                      "Scarcity",
                      "Unlimited supply"
                    ],
                    "answer": 2,
                    "focusTerm": "scarcity",
                    "source": "Dextra original practice",
                    "sourceQuestion": 46
                  },
                  {
                    "prompt": "A school club must choose between two events because it has limited funds. What concept causes the choice?",
                    "choices": [
                      "Price lining",
                      "Scarcity",
                      "Unlimited supply",
                      "Equity financing"
                    ],
                    "answer": 1,
                    "focusTerm": "scarcity",
                    "source": "Dextra original practice",
                    "sourceQuestion": 47
                  },
                  {
                    "prompt": "A restaurant limits reservations because kitchen space and staff time are limited. Which term applies?",
                    "choices": [
                      "Scarcity",
                      "Unlimited supply",
                      "Equity financing",
                      "Price lining"
                    ],
                    "answer": 0,
                    "focusTerm": "scarcity",
                    "source": "Dextra original practice",
                    "sourceQuestion": 48
                  },
                  {
                    "prompt": "A company cannot produce every requested product because materials are limited. What condition exists?",
                    "choices": [
                      "Unlimited supply",
                      "Equity financing",
                      "Price lining",
                      "Scarcity"
                    ],
                    "answer": 3,
                    "focusTerm": "scarcity",
                    "source": "Dextra original practice",
                    "sourceQuestion": 49
                  },
                  {
                    "prompt": "A family compares vacation options because time and money are limited. Which concept explains the tradeoff?",
                    "choices": [
                      "Equity financing",
                      "Price lining",
                      "Scarcity",
                      "Unlimited supply"
                    ],
                    "answer": 2,
                    "focusTerm": "scarcity",
                    "source": "Dextra original practice",
                    "sourceQuestion": 50
                  },
                  {
                    "prompt": "A company calculates what percent of each sales dollar remains after covering costs. Which measure is it finding?",
                    "choices": [
                      "Payroll cycle",
                      "Profit margin",
                      "Credit limit",
                      "Market share"
                    ],
                    "answer": 1,
                    "focusTerm": "profit margin",
                    "source": "Dextra original practice",
                    "sourceQuestion": 51
                  },
                  {
                    "prompt": "A bakery compares revenue from cupcakes with ingredient and labor costs to see how much is left per dollar sold. What metric is this?",
                    "choices": [
                      "Profit margin",
                      "Credit limit",
                      "Market share",
                      "Payroll cycle"
                    ],
                    "answer": 0,
                    "focusTerm": "profit margin",
                    "source": "Dextra original practice",
                    "sourceQuestion": 52
                  },
                  {
                    "prompt": "A retailer wants to know whether price increases improved the percentage of sales kept as profit. Which measure should it review?",
                    "choices": [
                      "Credit limit",
                      "Market share",
                      "Payroll cycle",
                      "Profit margin"
                    ],
                    "answer": 3,
                    "focusTerm": "profit margin",
                    "source": "Dextra original practice",
                    "sourceQuestion": 53
                  },
                  {
                    "prompt": "A manager compares two products by the portion of revenue left after expenses. Which term names that percentage?",
                    "choices": [
                      "Market share",
                      "Payroll cycle",
                      "Profit margin",
                      "Credit limit"
                    ],
                    "answer": 2,
                    "focusTerm": "profit margin",
                    "source": "Dextra original practice",
                    "sourceQuestion": 54
                  },
                  {
                    "prompt": "A business sees that higher shipping costs reduced the percent of sales retained as profit. What measure declined?",
                    "choices": [
                      "Payroll cycle",
                      "Profit margin",
                      "Credit limit",
                      "Market share"
                    ],
                    "answer": 1,
                    "focusTerm": "profit margin",
                    "source": "Dextra original practice",
                    "sourceQuestion": 55
                  },
                  {
                    "prompt": "An invoice says payment is due within 30 days. What does that statement describe?",
                    "choices": [
                      "Credit terms",
                      "Promotional mix",
                      "Operating hours",
                      "Product width"
                    ],
                    "answer": 0,
                    "focusTerm": "credit terms",
                    "source": "Dextra original practice",
                    "sourceQuestion": 56
                  },
                  {
                    "prompt": "A supplier offers a discount if a buyer pays within ten days. Which part of the sale is being communicated?",
                    "choices": [
                      "Promotional mix",
                      "Operating hours",
                      "Product width",
                      "Credit terms"
                    ],
                    "answer": 3,
                    "focusTerm": "credit terms",
                    "source": "Dextra original practice",
                    "sourceQuestion": 57
                  },
                  {
                    "prompt": "A customer account agreement lists interest charges and payment deadlines. What are these conditions called?",
                    "choices": [
                      "Operating hours",
                      "Product width",
                      "Credit terms",
                      "Promotional mix"
                    ],
                    "answer": 2,
                    "focusTerm": "credit terms",
                    "source": "Dextra original practice",
                    "sourceQuestion": 58
                  },
                  {
                    "prompt": "A wholesaler tells a retailer that unpaid balances are due by the end of the month. Which term applies?",
                    "choices": [
                      "Product width",
                      "Credit terms",
                      "Promotional mix",
                      "Operating hours"
                    ],
                    "answer": 1,
                    "focusTerm": "credit terms",
                    "source": "Dextra original practice",
                    "sourceQuestion": 59
                  },
                  {
                    "prompt": "A business reviews when customers must pay for purchases made on account. What is it reviewing?",
                    "choices": [
                      "Credit terms",
                      "Promotional mix",
                      "Operating hours",
                      "Product width"
                    ],
                    "answer": 0,
                    "focusTerm": "credit terms",
                    "source": "Dextra original practice",
                    "sourceQuestion": 60
                  }
                ]
              },
              {
                "id": "bac-core-4",
                "title": "Marketing and Research",
                "terms": [
                  {
                    "term": "market segmentation",
                    "definition": "dividing a broad market into smaller groups with shared characteristics"
                  },
                  {
                    "term": "value proposition",
                    "definition": "the clear reason a customer should choose one product or service over another"
                  },
                  {
                    "term": "primary research",
                    "definition": "new data collected directly for a specific purpose"
                  },
                  {
                    "term": "promotion mix",
                    "definition": "the combination of communication tools used to reach customers"
                  }
                ],
                "questions": [
                  {
                    "prompt": "A shoe company groups customers by running habits before creating ads. What marketing activity is this?",
                    "choices": [
                      "Cash flow",
                      "Inventory control",
                      "Trade credit",
                      "Market segmentation"
                    ],
                    "answer": 3,
                    "focusTerm": "market segmentation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 61
                  },
                  {
                    "prompt": "A store separates shoppers into budget, premium, and gift-buying groups. Which concept is being used?",
                    "choices": [
                      "Inventory control",
                      "Trade credit",
                      "Market segmentation",
                      "Cash flow"
                    ],
                    "answer": 2,
                    "focusTerm": "market segmentation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 62
                  },
                  {
                    "prompt": "A gym targets different messages to beginners, athletes, and seniors. What did the gym do first?",
                    "choices": [
                      "Trade credit",
                      "Market segmentation",
                      "Cash flow",
                      "Inventory control"
                    ],
                    "answer": 1,
                    "focusTerm": "market segmentation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 63
                  },
                  {
                    "prompt": "A snack brand divides buyers by age and lifestyle to choose packaging. Which term fits this process?",
                    "choices": [
                      "Market segmentation",
                      "Cash flow",
                      "Inventory control",
                      "Trade credit"
                    ],
                    "answer": 0,
                    "focusTerm": "market segmentation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 64
                  },
                  {
                    "prompt": "A travel company groups customers by trip purpose before sending offers. What marketing action is shown?",
                    "choices": [
                      "Cash flow",
                      "Inventory control",
                      "Trade credit",
                      "Market segmentation"
                    ],
                    "answer": 3,
                    "focusTerm": "market segmentation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 65
                  },
                  {
                    "prompt": "A car wash says it is faster, uses less water, and costs the same as nearby washes. What is it communicating?",
                    "choices": [
                      "Tariff",
                      "Ledger balance",
                      "Value proposition",
                      "Purchase order"
                    ],
                    "answer": 2,
                    "focusTerm": "value proposition",
                    "source": "Dextra original practice",
                    "sourceQuestion": 66
                  },
                  {
                    "prompt": "A tutoring center promises smaller groups and weekly progress notes. Which term describes this reason to choose it?",
                    "choices": [
                      "Ledger balance",
                      "Value proposition",
                      "Purchase order",
                      "Tariff"
                    ],
                    "answer": 1,
                    "focusTerm": "value proposition",
                    "source": "Dextra original practice",
                    "sourceQuestion": 67
                  },
                  {
                    "prompt": "A phone plan highlights no contracts and stronger rural coverage. What business statement is this?",
                    "choices": [
                      "Value proposition",
                      "Purchase order",
                      "Tariff",
                      "Ledger balance"
                    ],
                    "answer": 0,
                    "focusTerm": "value proposition",
                    "source": "Dextra original practice",
                    "sourceQuestion": 68
                  },
                  {
                    "prompt": "A meal kit advertises healthy dinners in 15 minutes for busy families. Which concept is being stated?",
                    "choices": [
                      "Purchase order",
                      "Tariff",
                      "Ledger balance",
                      "Value proposition"
                    ],
                    "answer": 3,
                    "focusTerm": "value proposition",
                    "source": "Dextra original practice",
                    "sourceQuestion": 69
                  },
                  {
                    "prompt": "A music app says its playlists are better for runners than any competitor’s. What is this message?",
                    "choices": [
                      "Tariff",
                      "Ledger balance",
                      "Value proposition",
                      "Purchase order"
                    ],
                    "answer": 2,
                    "focusTerm": "value proposition",
                    "source": "Dextra original practice",
                    "sourceQuestion": 70
                  },
                  {
                    "prompt": "A business surveys its own customers to learn why they stopped buying. What type of research is this?",
                    "choices": [
                      "Franchise fee",
                      "Primary research",
                      "Secondary storage",
                      "Markdown pricing"
                    ],
                    "answer": 1,
                    "focusTerm": "primary research",
                    "source": "Dextra original practice",
                    "sourceQuestion": 71
                  },
                  {
                    "prompt": "A student interviews store managers for a project instead of using only online articles. Which research type is being used?",
                    "choices": [
                      "Primary research",
                      "Secondary storage",
                      "Markdown pricing",
                      "Franchise fee"
                    ],
                    "answer": 0,
                    "focusTerm": "primary research",
                    "source": "Dextra original practice",
                    "sourceQuestion": 72
                  },
                  {
                    "prompt": "A cafe asks visitors to taste two recipes and records their preferences. What kind of data collection is this?",
                    "choices": [
                      "Secondary storage",
                      "Markdown pricing",
                      "Franchise fee",
                      "Primary research"
                    ],
                    "answer": 3,
                    "focusTerm": "primary research",
                    "source": "Dextra original practice",
                    "sourceQuestion": 73
                  },
                  {
                    "prompt": "A retailer runs a focus group to test reactions to a new logo. Which term applies?",
                    "choices": [
                      "Markdown pricing",
                      "Franchise fee",
                      "Primary research",
                      "Secondary storage"
                    ],
                    "answer": 2,
                    "focusTerm": "primary research",
                    "source": "Dextra original practice",
                    "sourceQuestion": 74
                  },
                  {
                    "prompt": "A gym emails members a custom questionnaire about class times. What type of research is it conducting?",
                    "choices": [
                      "Franchise fee",
                      "Primary research",
                      "Secondary storage",
                      "Markdown pricing"
                    ],
                    "answer": 1,
                    "focusTerm": "primary research",
                    "source": "Dextra original practice",
                    "sourceQuestion": 75
                  },
                  {
                    "prompt": "A company combines social media posts, email coupons, and in-store signs for one campaign. What is this combination?",
                    "choices": [
                      "Promotion mix",
                      "Balance sheet",
                      "Supply chain",
                      "Unit cost"
                    ],
                    "answer": 0,
                    "focusTerm": "promotion mix",
                    "source": "Dextra original practice",
                    "sourceQuestion": 76
                  },
                  {
                    "prompt": "A nonprofit uses public relations, flyers, and direct messages to promote an event. Which marketing concept is shown?",
                    "choices": [
                      "Balance sheet",
                      "Supply chain",
                      "Unit cost",
                      "Promotion mix"
                    ],
                    "answer": 3,
                    "focusTerm": "promotion mix",
                    "source": "Dextra original practice",
                    "sourceQuestion": 77
                  },
                  {
                    "prompt": "A retailer coordinates ads, sales promotions, and personal selling for a product launch. What is it managing?",
                    "choices": [
                      "Supply chain",
                      "Unit cost",
                      "Promotion mix",
                      "Balance sheet"
                    ],
                    "answer": 2,
                    "focusTerm": "promotion mix",
                    "source": "Dextra original practice",
                    "sourceQuestion": 78
                  },
                  {
                    "prompt": "A restaurant uses radio ads, loyalty app offers, and community sponsorships to reach diners. Which term applies?",
                    "choices": [
                      "Unit cost",
                      "Promotion mix",
                      "Balance sheet",
                      "Supply chain"
                    ],
                    "answer": 1,
                    "focusTerm": "promotion mix",
                    "source": "Dextra original practice",
                    "sourceQuestion": 79
                  },
                  {
                    "prompt": "A brand plans which communication tools will support a new product. What is the brand designing?",
                    "choices": [
                      "Promotion mix",
                      "Balance sheet",
                      "Supply chain",
                      "Unit cost"
                    ],
                    "answer": 0,
                    "focusTerm": "promotion mix",
                    "source": "Dextra original practice",
                    "sourceQuestion": 80
                  }
                ]
              },
              {
                "id": "bac-core-5",
                "title": "Operations and Management",
                "terms": [
                  {
                    "term": "workflow",
                    "definition": "the ordered series of tasks required to complete a process"
                  },
                  {
                    "term": "quality control",
                    "definition": "checking work or products to make sure standards are met"
                  },
                  {
                    "term": "inventory turnover",
                    "definition": "how often inventory is sold and replaced during a period"
                  },
                  {
                    "term": "delegation",
                    "definition": "assigning responsibility for a task to another person"
                  }
                ],
                "questions": [
                  {
                    "prompt": "A bakery maps each step from online order to pickup to find delays. What is it reviewing?",
                    "choices": [
                      "Equity",
                      "Price ceiling",
                      "Brand extension",
                      "Workflow"
                    ],
                    "answer": 3,
                    "focusTerm": "workflow",
                    "source": "Dextra original practice",
                    "sourceQuestion": 81
                  },
                  {
                    "prompt": "A team lists the tasks needed to prepare a shipment from packing to delivery. Which term describes the process?",
                    "choices": [
                      "Price ceiling",
                      "Brand extension",
                      "Workflow",
                      "Equity"
                    ],
                    "answer": 2,
                    "focusTerm": "workflow",
                    "source": "Dextra original practice",
                    "sourceQuestion": 82
                  },
                  {
                    "prompt": "A clinic studies how patients move from check-in to checkout. What is the clinic analyzing?",
                    "choices": [
                      "Brand extension",
                      "Workflow",
                      "Equity",
                      "Price ceiling"
                    ],
                    "answer": 1,
                    "focusTerm": "workflow",
                    "source": "Dextra original practice",
                    "sourceQuestion": 83
                  },
                  {
                    "prompt": "A store diagrams the order of tasks for opening each morning. Which concept is being documented?",
                    "choices": [
                      "Workflow",
                      "Equity",
                      "Price ceiling",
                      "Brand extension"
                    ],
                    "answer": 0,
                    "focusTerm": "workflow",
                    "source": "Dextra original practice",
                    "sourceQuestion": 84
                  },
                  {
                    "prompt": "A restaurant reviews the sequence from seating a guest to processing payment. What is this sequence called?",
                    "choices": [
                      "Equity",
                      "Price ceiling",
                      "Brand extension",
                      "Workflow"
                    ],
                    "answer": 3,
                    "focusTerm": "workflow",
                    "source": "Dextra original practice",
                    "sourceQuestion": 85
                  },
                  {
                    "prompt": "A supervisor checks finished products against standards before shipping. What activity is this?",
                    "choices": [
                      "Credit score",
                      "Price discrimination",
                      "Quality control",
                      "Market share"
                    ],
                    "answer": 2,
                    "focusTerm": "quality control",
                    "source": "Dextra original practice",
                    "sourceQuestion": 86
                  },
                  {
                    "prompt": "A restaurant verifies food temperature and presentation before meals leave the kitchen. Which process is shown?",
                    "choices": [
                      "Price discrimination",
                      "Quality control",
                      "Market share",
                      "Credit score"
                    ],
                    "answer": 1,
                    "focusTerm": "quality control",
                    "source": "Dextra original practice",
                    "sourceQuestion": 87
                  },
                  {
                    "prompt": "A print shop inspects flyers for color and spelling errors before delivery. What is it performing?",
                    "choices": [
                      "Quality control",
                      "Market share",
                      "Credit score",
                      "Price discrimination"
                    ],
                    "answer": 0,
                    "focusTerm": "quality control",
                    "source": "Dextra original practice",
                    "sourceQuestion": 88
                  },
                  {
                    "prompt": "A hotel manager reviews cleaned rooms against a checklist. Which term best applies?",
                    "choices": [
                      "Market share",
                      "Credit score",
                      "Price discrimination",
                      "Quality control"
                    ],
                    "answer": 3,
                    "focusTerm": "quality control",
                    "source": "Dextra original practice",
                    "sourceQuestion": 89
                  },
                  {
                    "prompt": "A software team tests a form to make sure it works before release. What management activity is this?",
                    "choices": [
                      "Credit score",
                      "Price discrimination",
                      "Quality control",
                      "Market share"
                    ],
                    "answer": 2,
                    "focusTerm": "quality control",
                    "source": "Dextra original practice",
                    "sourceQuestion": 90
                  },
                  {
                    "prompt": "A retailer measures how many times shoes sell out and are replaced during a season. Which measure is this?",
                    "choices": [
                      "Operating lease",
                      "Inventory turnover",
                      "Payroll tax",
                      "Customer lifetime value"
                    ],
                    "answer": 1,
                    "focusTerm": "inventory turnover",
                    "source": "Dextra original practice",
                    "sourceQuestion": 91
                  },
                  {
                    "prompt": "A grocery store tracks how quickly produce is sold and restocked. What metric is being watched?",
                    "choices": [
                      "Inventory turnover",
                      "Payroll tax",
                      "Customer lifetime value",
                      "Operating lease"
                    ],
                    "answer": 0,
                    "focusTerm": "inventory turnover",
                    "source": "Dextra original practice",
                    "sourceQuestion": 92
                  },
                  {
                    "prompt": "A warehouse compares annual sales with average stock on hand. Which concept is it calculating?",
                    "choices": [
                      "Payroll tax",
                      "Customer lifetime value",
                      "Operating lease",
                      "Inventory turnover"
                    ],
                    "answer": 3,
                    "focusTerm": "inventory turnover",
                    "source": "Dextra original practice",
                    "sourceQuestion": 93
                  },
                  {
                    "prompt": "A boutique wants to know whether merchandise is moving too slowly. Which measure should it examine?",
                    "choices": [
                      "Customer lifetime value",
                      "Operating lease",
                      "Inventory turnover",
                      "Payroll tax"
                    ],
                    "answer": 2,
                    "focusTerm": "inventory turnover",
                    "source": "Dextra original practice",
                    "sourceQuestion": 94
                  },
                  {
                    "prompt": "A manager says high sales are useful only if stock is replaced at the right pace. Which inventory measure matters?",
                    "choices": [
                      "Operating lease",
                      "Inventory turnover",
                      "Payroll tax",
                      "Customer lifetime value"
                    ],
                    "answer": 1,
                    "focusTerm": "inventory turnover",
                    "source": "Dextra original practice",
                    "sourceQuestion": 95
                  },
                  {
                    "prompt": "A manager asks an assistant to prepare the weekly schedule and gives clear deadlines. Which management action is this?",
                    "choices": [
                      "Delegation",
                      "Depreciation",
                      "Prospecting",
                      "Importing"
                    ],
                    "answer": 0,
                    "focusTerm": "delegation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 96
                  },
                  {
                    "prompt": "A club president assigns a member to handle registration while another manages supplies. What is the president doing?",
                    "choices": [
                      "Depreciation",
                      "Prospecting",
                      "Importing",
                      "Delegation"
                    ],
                    "answer": 3,
                    "focusTerm": "delegation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 97
                  },
                  {
                    "prompt": "A supervisor gives a trained employee responsibility for closing reports. Which term applies?",
                    "choices": [
                      "Prospecting",
                      "Importing",
                      "Delegation",
                      "Depreciation"
                    ],
                    "answer": 2,
                    "focusTerm": "delegation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 98
                  },
                  {
                    "prompt": "A team lead hands off the survey summary to a member who has the needed skills. What management practice is shown?",
                    "choices": [
                      "Importing",
                      "Delegation",
                      "Depreciation",
                      "Prospecting"
                    ],
                    "answer": 1,
                    "focusTerm": "delegation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 99
                  },
                  {
                    "prompt": "A store owner asks a shift leader to train new cashiers. Which action is being used?",
                    "choices": [
                      "Delegation",
                      "Depreciation",
                      "Prospecting",
                      "Importing"
                    ],
                    "answer": 0,
                    "focusTerm": "delegation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 100
                  }
                ]
              }
            ],
        },
      ],
    },
    {
      id: "bma",
      code: "BMA",
      title: "Business Management and Administration",
      source: "https://www.decaplus.org/exams/business-administration-core",
      overview:
        "Management, operations, customer service, and business decision-making fundamentals used across many DECA events.",
      visual: "briefcase",
      icon: "assets/category-icons/briefcase.svg",
      chapters: [
        {
          id: "customer-relations",
          title: "Customer Relations",
          lessons:             [
              {
                "id": "bac-core-1",
                "title": "Communication and Professionalism",
                "terms": [
                  {
                    "term": "active listening",
                    "definition": "giving full attention, asking clarifying questions, and confirming understanding"
                  },
                  {
                    "term": "paraphrasing",
                    "definition": "restating a message in your own words to confirm meaning"
                  },
                  {
                    "term": "formal communication",
                    "definition": "workplace communication that follows official channels and accepted structure"
                  },
                  {
                    "term": "nonverbal communication",
                    "definition": "messages sent through facial expression, posture, gestures, or tone"
                  }
                ],
                "questions": [
                  {
                    "prompt": "A service representative pauses their work, lets a customer finish explaining, and asks one clarifying question before responding. Which communication skill is being used?",
                    "choices": [
                      "Price lining",
                      "Inventory control",
                      "Mass marketing",
                      "Active listening"
                    ],
                    "answer": 3,
                    "focusTerm": "active listening",
                    "source": "Dextra original practice",
                    "sourceQuestion": 1
                  },
                  {
                    "prompt": "During a team meeting, Maya takes notes and confirms the speaker’s main concern before suggesting a solution. What is Maya practicing?",
                    "choices": [
                      "Inventory control",
                      "Mass marketing",
                      "Active listening",
                      "Price lining"
                    ],
                    "answer": 2,
                    "focusTerm": "active listening",
                    "source": "Dextra original practice",
                    "sourceQuestion": 2
                  },
                  {
                    "prompt": "A cashier repeats the issue, checks the receipt, and asks whether the customer wants a refund or exchange. Which skill best fits this behavior?",
                    "choices": [
                      "Mass marketing",
                      "Active listening",
                      "Price lining",
                      "Inventory control"
                    ],
                    "answer": 1,
                    "focusTerm": "active listening",
                    "source": "Dextra original practice",
                    "sourceQuestion": 3
                  },
                  {
                    "prompt": "A manager listens without interrupting while an employee explains why a deadline was missed. What communication behavior is strongest here?",
                    "choices": [
                      "Active listening",
                      "Price lining",
                      "Inventory control",
                      "Mass marketing"
                    ],
                    "answer": 0,
                    "focusTerm": "active listening",
                    "source": "Dextra original practice",
                    "sourceQuestion": 4
                  },
                  {
                    "prompt": "A sales associate focuses on a shopper’s full explanation before recommending a product. Which skill is the associate demonstrating?",
                    "choices": [
                      "Price lining",
                      "Inventory control",
                      "Mass marketing",
                      "Active listening"
                    ],
                    "answer": 3,
                    "focusTerm": "active listening",
                    "source": "Dextra original practice",
                    "sourceQuestion": 5
                  },
                  {
                    "prompt": "An employee says, “So you need the delivery moved to Friday because your event changed.” Which technique is the employee using?",
                    "choices": [
                      "Benchmarking",
                      "Product bundling",
                      "Paraphrasing",
                      "Prospecting"
                    ],
                    "answer": 2,
                    "focusTerm": "paraphrasing",
                    "source": "Dextra original practice",
                    "sourceQuestion": 6
                  },
                  {
                    "prompt": "A team leader restates a coworker’s idea in simpler language before the group votes. What is the leader doing?",
                    "choices": [
                      "Product bundling",
                      "Paraphrasing",
                      "Prospecting",
                      "Benchmarking"
                    ],
                    "answer": 1,
                    "focusTerm": "paraphrasing",
                    "source": "Dextra original practice",
                    "sourceQuestion": 7
                  },
                  {
                    "prompt": "A support agent says, “You were charged twice for one order, and you want the duplicate removed.” Which communication method is this?",
                    "choices": [
                      "Paraphrasing",
                      "Prospecting",
                      "Benchmarking",
                      "Product bundling"
                    ],
                    "answer": 0,
                    "focusTerm": "paraphrasing",
                    "source": "Dextra original practice",
                    "sourceQuestion": 8
                  },
                  {
                    "prompt": "A receptionist summarizes a parent’s scheduling problem before checking available class times. What technique is being used?",
                    "choices": [
                      "Prospecting",
                      "Benchmarking",
                      "Product bundling",
                      "Paraphrasing"
                    ],
                    "answer": 3,
                    "focusTerm": "paraphrasing",
                    "source": "Dextra original practice",
                    "sourceQuestion": 9
                  },
                  {
                    "prompt": "A trainer says, “You are asking for a slower pace and more examples.” Which response technique does this show?",
                    "choices": [
                      "Benchmarking",
                      "Product bundling",
                      "Paraphrasing",
                      "Prospecting"
                    ],
                    "answer": 2,
                    "focusTerm": "paraphrasing",
                    "source": "Dextra original practice",
                    "sourceQuestion": 10
                  },
                  {
                    "prompt": "A company sends an official policy update through its employee portal. What type of workplace communication is this?",
                    "choices": [
                      "Informal credit",
                      "Formal communication",
                      "Impulse buying",
                      "Viral marketing"
                    ],
                    "answer": 1,
                    "focusTerm": "formal communication",
                    "source": "Dextra original practice",
                    "sourceQuestion": 11
                  },
                  {
                    "prompt": "A supervisor submits a written incident report using the company’s required form. Which communication category applies?",
                    "choices": [
                      "Formal communication",
                      "Impulse buying",
                      "Viral marketing",
                      "Informal credit"
                    ],
                    "answer": 0,
                    "focusTerm": "formal communication",
                    "source": "Dextra original practice",
                    "sourceQuestion": 12
                  },
                  {
                    "prompt": "An HR department emails a benefits reminder using approved company language and channels. What is this an example of?",
                    "choices": [
                      "Impulse buying",
                      "Viral marketing",
                      "Informal credit",
                      "Formal communication"
                    ],
                    "answer": 3,
                    "focusTerm": "formal communication",
                    "source": "Dextra original practice",
                    "sourceQuestion": 13
                  },
                  {
                    "prompt": "A store manager posts the official holiday schedule in the staff system. Which communication type is being used?",
                    "choices": [
                      "Viral marketing",
                      "Informal credit",
                      "Formal communication",
                      "Impulse buying"
                    ],
                    "answer": 2,
                    "focusTerm": "formal communication",
                    "source": "Dextra original practice",
                    "sourceQuestion": 14
                  },
                  {
                    "prompt": "A project lead sends a meeting agenda to all team members through the company platform. Which term best describes the communication?",
                    "choices": [
                      "Informal credit",
                      "Formal communication",
                      "Impulse buying",
                      "Viral marketing"
                    ],
                    "answer": 1,
                    "focusTerm": "formal communication",
                    "source": "Dextra original practice",
                    "sourceQuestion": 15
                  },
                  {
                    "prompt": "A customer crosses their arms and avoids eye contact while listening to a return policy. What kind of message is the customer sending?",
                    "choices": [
                      "Nonverbal communication",
                      "Trade credit",
                      "Cost accounting",
                      "Market research"
                    ],
                    "answer": 0,
                    "focusTerm": "nonverbal communication",
                    "source": "Dextra original practice",
                    "sourceQuestion": 16
                  },
                  {
                    "prompt": "A presenter smiles, stands upright, and gestures toward the chart while speaking. Which communication channel supports the message?",
                    "choices": [
                      "Trade credit",
                      "Cost accounting",
                      "Market research",
                      "Nonverbal communication"
                    ],
                    "answer": 3,
                    "focusTerm": "nonverbal communication",
                    "source": "Dextra original practice",
                    "sourceQuestion": 17
                  },
                  {
                    "prompt": "A customer’s confused facial expression tells the employee to explain the instructions again. What type of cue is being read?",
                    "choices": [
                      "Cost accounting",
                      "Market research",
                      "Nonverbal communication",
                      "Trade credit"
                    ],
                    "answer": 2,
                    "focusTerm": "nonverbal communication",
                    "source": "Dextra original practice",
                    "sourceQuestion": 18
                  },
                  {
                    "prompt": "A team member nods during a discussion to show agreement without speaking. Which term describes this signal?",
                    "choices": [
                      "Market research",
                      "Nonverbal communication",
                      "Trade credit",
                      "Cost accounting"
                    ],
                    "answer": 1,
                    "focusTerm": "nonverbal communication",
                    "source": "Dextra original practice",
                    "sourceQuestion": 19
                  },
                  {
                    "prompt": "A rushed tone makes an apology sound less sincere even though the words are polite. What type of communication affected the message?",
                    "choices": [
                      "Nonverbal communication",
                      "Trade credit",
                      "Cost accounting",
                      "Market research"
                    ],
                    "answer": 0,
                    "focusTerm": "nonverbal communication",
                    "source": "Dextra original practice",
                    "sourceQuestion": 20
                  }
                ]
              },
              {
                "id": "bac-core-2",
                "title": "Customer Relations",
                "terms": [
                  {
                    "term": "customer expectation",
                    "definition": "what a customer believes should happen during a product or service experience"
                  },
                  {
                    "term": "service recovery",
                    "definition": "actions a business takes to fix a customer problem after a mistake"
                  },
                  {
                    "term": "customer loyalty",
                    "definition": "a customer’s preference for continuing to buy from or use the same business"
                  },
                  {
                    "term": "customer complaint",
                    "definition": "feedback that identifies dissatisfaction with a product or service"
                  }
                ],
                "questions": [
                  {
                    "prompt": "A restaurant promises ten-minute pickup, so guests arrive expecting their food to be ready quickly. What did the promise create?",
                    "choices": [
                      "Cash discount",
                      "Trade barrier",
                      "Fixed asset",
                      "Customer expectation"
                    ],
                    "answer": 3,
                    "focusTerm": "customer expectation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 21
                  },
                  {
                    "prompt": "A website states that returns are free, so buyers assume they will not pay return shipping. Which term describes this assumption?",
                    "choices": [
                      "Trade barrier",
                      "Fixed asset",
                      "Customer expectation",
                      "Cash discount"
                    ],
                    "answer": 2,
                    "focusTerm": "customer expectation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 22
                  },
                  {
                    "prompt": "A gym advertises spotless locker rooms, so members expect them to be clean every visit. What is being set?",
                    "choices": [
                      "Fixed asset",
                      "Customer expectation",
                      "Cash discount",
                      "Trade barrier"
                    ],
                    "answer": 1,
                    "focusTerm": "customer expectation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 23
                  },
                  {
                    "prompt": "A class reminder says students need goggles, so families arrive prepared. What did the message create?",
                    "choices": [
                      "Customer expectation",
                      "Cash discount",
                      "Trade barrier",
                      "Fixed asset"
                    ],
                    "answer": 0,
                    "focusTerm": "customer expectation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 24
                  },
                  {
                    "prompt": "A delivery app shows a 30-minute estimate, so customers plan around that timing. Which concept is involved?",
                    "choices": [
                      "Cash discount",
                      "Trade barrier",
                      "Fixed asset",
                      "Customer expectation"
                    ],
                    "answer": 3,
                    "focusTerm": "customer expectation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 25
                  },
                  {
                    "prompt": "A hotel moves a guest to a quieter room after a noise complaint and adds reward points. What is the hotel practicing?",
                    "choices": [
                      "Inventory shrinkage",
                      "Price skimming",
                      "Service recovery",
                      "Market penetration"
                    ],
                    "answer": 2,
                    "focusTerm": "service recovery",
                    "source": "Dextra original practice",
                    "sourceQuestion": 26
                  },
                  {
                    "prompt": "A store replaces a damaged item and apologizes for the inconvenience. Which customer-service process is this?",
                    "choices": [
                      "Price skimming",
                      "Service recovery",
                      "Market penetration",
                      "Inventory shrinkage"
                    ],
                    "answer": 1,
                    "focusTerm": "service recovery",
                    "source": "Dextra original practice",
                    "sourceQuestion": 27
                  },
                  {
                    "prompt": "A restaurant remakes an incorrect meal and removes it from the bill. What is the business doing?",
                    "choices": [
                      "Service recovery",
                      "Market penetration",
                      "Inventory shrinkage",
                      "Price skimming"
                    ],
                    "answer": 0,
                    "focusTerm": "service recovery",
                    "source": "Dextra original practice",
                    "sourceQuestion": 28
                  },
                  {
                    "prompt": "A company offers a credit after missing its installation window. Which term best describes the action?",
                    "choices": [
                      "Market penetration",
                      "Inventory shrinkage",
                      "Price skimming",
                      "Service recovery"
                    ],
                    "answer": 3,
                    "focusTerm": "service recovery",
                    "source": "Dextra original practice",
                    "sourceQuestion": 29
                  },
                  {
                    "prompt": "A swim school schedules a free makeup lesson after canceling a class too late. What process does this show?",
                    "choices": [
                      "Inventory shrinkage",
                      "Price skimming",
                      "Service recovery",
                      "Market penetration"
                    ],
                    "answer": 2,
                    "focusTerm": "service recovery",
                    "source": "Dextra original practice",
                    "sourceQuestion": 30
                  },
                  {
                    "prompt": "A family renews lessons every season because the instructors remember their child’s goals. What relationship outcome is shown?",
                    "choices": [
                      "Invoice aging",
                      "Customer loyalty",
                      "Depreciation",
                      "Scarcity"
                    ],
                    "answer": 1,
                    "focusTerm": "customer loyalty",
                    "source": "Dextra original practice",
                    "sourceQuestion": 31
                  },
                  {
                    "prompt": "A shopper chooses the same shoe brand even when a competitor is cheaper. Which concept explains the behavior?",
                    "choices": [
                      "Customer loyalty",
                      "Depreciation",
                      "Scarcity",
                      "Invoice aging"
                    ],
                    "answer": 0,
                    "focusTerm": "customer loyalty",
                    "source": "Dextra original practice",
                    "sourceQuestion": 32
                  },
                  {
                    "prompt": "A customer recommends the same barber to friends and keeps booking appointments. What does this demonstrate?",
                    "choices": [
                      "Depreciation",
                      "Scarcity",
                      "Invoice aging",
                      "Customer loyalty"
                    ],
                    "answer": 3,
                    "focusTerm": "customer loyalty",
                    "source": "Dextra original practice",
                    "sourceQuestion": 33
                  },
                  {
                    "prompt": "A member waits for their favorite trainer instead of choosing any available coach. Which result is strongest?",
                    "choices": [
                      "Scarcity",
                      "Invoice aging",
                      "Customer loyalty",
                      "Depreciation"
                    ],
                    "answer": 2,
                    "focusTerm": "customer loyalty",
                    "source": "Dextra original practice",
                    "sourceQuestion": 34
                  },
                  {
                    "prompt": "A subscriber stays with a service because support is consistently helpful. What is the company building?",
                    "choices": [
                      "Invoice aging",
                      "Customer loyalty",
                      "Depreciation",
                      "Scarcity"
                    ],
                    "answer": 1,
                    "focusTerm": "customer loyalty",
                    "source": "Dextra original practice",
                    "sourceQuestion": 35
                  },
                  {
                    "prompt": "A buyer emails that their order arrived late and asks the business to fix the issue. What has the buyer submitted?",
                    "choices": [
                      "Customer complaint",
                      "Capital budget",
                      "Sales forecast",
                      "Operating lease"
                    ],
                    "answer": 0,
                    "focusTerm": "customer complaint",
                    "source": "Dextra original practice",
                    "sourceQuestion": 36
                  },
                  {
                    "prompt": "A guest tells the front desk that the room was not cleaned properly. Which type of customer feedback is this?",
                    "choices": [
                      "Capital budget",
                      "Sales forecast",
                      "Operating lease",
                      "Customer complaint"
                    ],
                    "answer": 3,
                    "focusTerm": "customer complaint",
                    "source": "Dextra original practice",
                    "sourceQuestion": 37
                  },
                  {
                    "prompt": "A parent reports that the class schedule shown online was incorrect. What is this message?",
                    "choices": [
                      "Sales forecast",
                      "Operating lease",
                      "Customer complaint",
                      "Capital budget"
                    ],
                    "answer": 2,
                    "focusTerm": "customer complaint",
                    "source": "Dextra original practice",
                    "sourceQuestion": 38
                  },
                  {
                    "prompt": "A shopper says the checkout process charged the wrong price. Which term describes the feedback?",
                    "choices": [
                      "Operating lease",
                      "Customer complaint",
                      "Capital budget",
                      "Sales forecast"
                    ],
                    "answer": 1,
                    "focusTerm": "customer complaint",
                    "source": "Dextra original practice",
                    "sourceQuestion": 39
                  },
                  {
                    "prompt": "A customer explains that a support representative never called back. What type of feedback is being shared?",
                    "choices": [
                      "Customer complaint",
                      "Capital budget",
                      "Sales forecast",
                      "Operating lease"
                    ],
                    "answer": 0,
                    "focusTerm": "customer complaint",
                    "source": "Dextra original practice",
                    "sourceQuestion": 40
                  }
                ]
              },
              {
                "id": "bac-core-3",
                "title": "Finance and Economics",
                "terms": [
                  {
                    "term": "opportunity cost",
                    "definition": "the value of the next-best option given up when a choice is made"
                  },
                  {
                    "term": "scarcity",
                    "definition": "the condition of having limited resources compared with unlimited wants"
                  },
                  {
                    "term": "profit margin",
                    "definition": "the percentage of sales revenue left after costs are subtracted"
                  },
                  {
                    "term": "credit terms",
                    "definition": "the conditions under which payment is due for borrowed money or purchases on account"
                  }
                ],
                "questions": [
                  {
                    "prompt": "A student spends Saturday working instead of attending a tournament. What is the tournament in this decision?",
                    "choices": [
                      "Sales tax",
                      "Net worth",
                      "Brand equity",
                      "Opportunity cost"
                    ],
                    "answer": 3,
                    "focusTerm": "opportunity cost",
                    "source": "Dextra original practice",
                    "sourceQuestion": 41
                  },
                  {
                    "prompt": "A business chooses to use its display window for new shoes instead of winter coats. What is the value of the coat display called?",
                    "choices": [
                      "Net worth",
                      "Brand equity",
                      "Opportunity cost",
                      "Sales tax"
                    ],
                    "answer": 2,
                    "focusTerm": "opportunity cost",
                    "source": "Dextra original practice",
                    "sourceQuestion": 42
                  },
                  {
                    "prompt": "A manager assigns staff to inventory counting, so they cannot help with a promotion. What concept describes the forgone promotion work?",
                    "choices": [
                      "Brand equity",
                      "Opportunity cost",
                      "Sales tax",
                      "Net worth"
                    ],
                    "answer": 1,
                    "focusTerm": "opportunity cost",
                    "source": "Dextra original practice",
                    "sourceQuestion": 43
                  },
                  {
                    "prompt": "A club spends its budget on travel and cannot buy new banners. What is the banner option?",
                    "choices": [
                      "Opportunity cost",
                      "Sales tax",
                      "Net worth",
                      "Brand equity"
                    ],
                    "answer": 0,
                    "focusTerm": "opportunity cost",
                    "source": "Dextra original practice",
                    "sourceQuestion": 44
                  },
                  {
                    "prompt": "A customer uses savings for a laptop instead of a vacation. What is the vacation in economic terms?",
                    "choices": [
                      "Sales tax",
                      "Net worth",
                      "Brand equity",
                      "Opportunity cost"
                    ],
                    "answer": 3,
                    "focusTerm": "opportunity cost",
                    "source": "Dextra original practice",
                    "sourceQuestion": 45
                  },
                  {
                    "prompt": "A store has only three employees available but ten tasks to complete before opening. Which economic condition is shown?",
                    "choices": [
                      "Equity financing",
                      "Price lining",
                      "Scarcity",
                      "Unlimited supply"
                    ],
                    "answer": 2,
                    "focusTerm": "scarcity",
                    "source": "Dextra original practice",
                    "sourceQuestion": 46
                  },
                  {
                    "prompt": "A school club must choose between two events because it has limited funds. What concept causes the choice?",
                    "choices": [
                      "Price lining",
                      "Scarcity",
                      "Unlimited supply",
                      "Equity financing"
                    ],
                    "answer": 1,
                    "focusTerm": "scarcity",
                    "source": "Dextra original practice",
                    "sourceQuestion": 47
                  },
                  {
                    "prompt": "A restaurant limits reservations because kitchen space and staff time are limited. Which term applies?",
                    "choices": [
                      "Scarcity",
                      "Unlimited supply",
                      "Equity financing",
                      "Price lining"
                    ],
                    "answer": 0,
                    "focusTerm": "scarcity",
                    "source": "Dextra original practice",
                    "sourceQuestion": 48
                  },
                  {
                    "prompt": "A company cannot produce every requested product because materials are limited. What condition exists?",
                    "choices": [
                      "Unlimited supply",
                      "Equity financing",
                      "Price lining",
                      "Scarcity"
                    ],
                    "answer": 3,
                    "focusTerm": "scarcity",
                    "source": "Dextra original practice",
                    "sourceQuestion": 49
                  },
                  {
                    "prompt": "A family compares vacation options because time and money are limited. Which concept explains the tradeoff?",
                    "choices": [
                      "Equity financing",
                      "Price lining",
                      "Scarcity",
                      "Unlimited supply"
                    ],
                    "answer": 2,
                    "focusTerm": "scarcity",
                    "source": "Dextra original practice",
                    "sourceQuestion": 50
                  },
                  {
                    "prompt": "A company calculates what percent of each sales dollar remains after covering costs. Which measure is it finding?",
                    "choices": [
                      "Payroll cycle",
                      "Profit margin",
                      "Credit limit",
                      "Market share"
                    ],
                    "answer": 1,
                    "focusTerm": "profit margin",
                    "source": "Dextra original practice",
                    "sourceQuestion": 51
                  },
                  {
                    "prompt": "A bakery compares revenue from cupcakes with ingredient and labor costs to see how much is left per dollar sold. What metric is this?",
                    "choices": [
                      "Profit margin",
                      "Credit limit",
                      "Market share",
                      "Payroll cycle"
                    ],
                    "answer": 0,
                    "focusTerm": "profit margin",
                    "source": "Dextra original practice",
                    "sourceQuestion": 52
                  },
                  {
                    "prompt": "A retailer wants to know whether price increases improved the percentage of sales kept as profit. Which measure should it review?",
                    "choices": [
                      "Credit limit",
                      "Market share",
                      "Payroll cycle",
                      "Profit margin"
                    ],
                    "answer": 3,
                    "focusTerm": "profit margin",
                    "source": "Dextra original practice",
                    "sourceQuestion": 53
                  },
                  {
                    "prompt": "A manager compares two products by the portion of revenue left after expenses. Which term names that percentage?",
                    "choices": [
                      "Market share",
                      "Payroll cycle",
                      "Profit margin",
                      "Credit limit"
                    ],
                    "answer": 2,
                    "focusTerm": "profit margin",
                    "source": "Dextra original practice",
                    "sourceQuestion": 54
                  },
                  {
                    "prompt": "A business sees that higher shipping costs reduced the percent of sales retained as profit. What measure declined?",
                    "choices": [
                      "Payroll cycle",
                      "Profit margin",
                      "Credit limit",
                      "Market share"
                    ],
                    "answer": 1,
                    "focusTerm": "profit margin",
                    "source": "Dextra original practice",
                    "sourceQuestion": 55
                  },
                  {
                    "prompt": "An invoice says payment is due within 30 days. What does that statement describe?",
                    "choices": [
                      "Credit terms",
                      "Promotional mix",
                      "Operating hours",
                      "Product width"
                    ],
                    "answer": 0,
                    "focusTerm": "credit terms",
                    "source": "Dextra original practice",
                    "sourceQuestion": 56
                  },
                  {
                    "prompt": "A supplier offers a discount if a buyer pays within ten days. Which part of the sale is being communicated?",
                    "choices": [
                      "Promotional mix",
                      "Operating hours",
                      "Product width",
                      "Credit terms"
                    ],
                    "answer": 3,
                    "focusTerm": "credit terms",
                    "source": "Dextra original practice",
                    "sourceQuestion": 57
                  },
                  {
                    "prompt": "A customer account agreement lists interest charges and payment deadlines. What are these conditions called?",
                    "choices": [
                      "Operating hours",
                      "Product width",
                      "Credit terms",
                      "Promotional mix"
                    ],
                    "answer": 2,
                    "focusTerm": "credit terms",
                    "source": "Dextra original practice",
                    "sourceQuestion": 58
                  },
                  {
                    "prompt": "A wholesaler tells a retailer that unpaid balances are due by the end of the month. Which term applies?",
                    "choices": [
                      "Product width",
                      "Credit terms",
                      "Promotional mix",
                      "Operating hours"
                    ],
                    "answer": 1,
                    "focusTerm": "credit terms",
                    "source": "Dextra original practice",
                    "sourceQuestion": 59
                  },
                  {
                    "prompt": "A business reviews when customers must pay for purchases made on account. What is it reviewing?",
                    "choices": [
                      "Credit terms",
                      "Promotional mix",
                      "Operating hours",
                      "Product width"
                    ],
                    "answer": 0,
                    "focusTerm": "credit terms",
                    "source": "Dextra original practice",
                    "sourceQuestion": 60
                  }
                ]
              },
              {
                "id": "bac-core-4",
                "title": "Marketing and Research",
                "terms": [
                  {
                    "term": "market segmentation",
                    "definition": "dividing a broad market into smaller groups with shared characteristics"
                  },
                  {
                    "term": "value proposition",
                    "definition": "the clear reason a customer should choose one product or service over another"
                  },
                  {
                    "term": "primary research",
                    "definition": "new data collected directly for a specific purpose"
                  },
                  {
                    "term": "promotion mix",
                    "definition": "the combination of communication tools used to reach customers"
                  }
                ],
                "questions": [
                  {
                    "prompt": "A shoe company groups customers by running habits before creating ads. What marketing activity is this?",
                    "choices": [
                      "Cash flow",
                      "Inventory control",
                      "Trade credit",
                      "Market segmentation"
                    ],
                    "answer": 3,
                    "focusTerm": "market segmentation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 61
                  },
                  {
                    "prompt": "A store separates shoppers into budget, premium, and gift-buying groups. Which concept is being used?",
                    "choices": [
                      "Inventory control",
                      "Trade credit",
                      "Market segmentation",
                      "Cash flow"
                    ],
                    "answer": 2,
                    "focusTerm": "market segmentation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 62
                  },
                  {
                    "prompt": "A gym targets different messages to beginners, athletes, and seniors. What did the gym do first?",
                    "choices": [
                      "Trade credit",
                      "Market segmentation",
                      "Cash flow",
                      "Inventory control"
                    ],
                    "answer": 1,
                    "focusTerm": "market segmentation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 63
                  },
                  {
                    "prompt": "A snack brand divides buyers by age and lifestyle to choose packaging. Which term fits this process?",
                    "choices": [
                      "Market segmentation",
                      "Cash flow",
                      "Inventory control",
                      "Trade credit"
                    ],
                    "answer": 0,
                    "focusTerm": "market segmentation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 64
                  },
                  {
                    "prompt": "A travel company groups customers by trip purpose before sending offers. What marketing action is shown?",
                    "choices": [
                      "Cash flow",
                      "Inventory control",
                      "Trade credit",
                      "Market segmentation"
                    ],
                    "answer": 3,
                    "focusTerm": "market segmentation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 65
                  },
                  {
                    "prompt": "A car wash says it is faster, uses less water, and costs the same as nearby washes. What is it communicating?",
                    "choices": [
                      "Tariff",
                      "Ledger balance",
                      "Value proposition",
                      "Purchase order"
                    ],
                    "answer": 2,
                    "focusTerm": "value proposition",
                    "source": "Dextra original practice",
                    "sourceQuestion": 66
                  },
                  {
                    "prompt": "A tutoring center promises smaller groups and weekly progress notes. Which term describes this reason to choose it?",
                    "choices": [
                      "Ledger balance",
                      "Value proposition",
                      "Purchase order",
                      "Tariff"
                    ],
                    "answer": 1,
                    "focusTerm": "value proposition",
                    "source": "Dextra original practice",
                    "sourceQuestion": 67
                  },
                  {
                    "prompt": "A phone plan highlights no contracts and stronger rural coverage. What business statement is this?",
                    "choices": [
                      "Value proposition",
                      "Purchase order",
                      "Tariff",
                      "Ledger balance"
                    ],
                    "answer": 0,
                    "focusTerm": "value proposition",
                    "source": "Dextra original practice",
                    "sourceQuestion": 68
                  },
                  {
                    "prompt": "A meal kit advertises healthy dinners in 15 minutes for busy families. Which concept is being stated?",
                    "choices": [
                      "Purchase order",
                      "Tariff",
                      "Ledger balance",
                      "Value proposition"
                    ],
                    "answer": 3,
                    "focusTerm": "value proposition",
                    "source": "Dextra original practice",
                    "sourceQuestion": 69
                  },
                  {
                    "prompt": "A music app says its playlists are better for runners than any competitor’s. What is this message?",
                    "choices": [
                      "Tariff",
                      "Ledger balance",
                      "Value proposition",
                      "Purchase order"
                    ],
                    "answer": 2,
                    "focusTerm": "value proposition",
                    "source": "Dextra original practice",
                    "sourceQuestion": 70
                  },
                  {
                    "prompt": "A business surveys its own customers to learn why they stopped buying. What type of research is this?",
                    "choices": [
                      "Franchise fee",
                      "Primary research",
                      "Secondary storage",
                      "Markdown pricing"
                    ],
                    "answer": 1,
                    "focusTerm": "primary research",
                    "source": "Dextra original practice",
                    "sourceQuestion": 71
                  },
                  {
                    "prompt": "A student interviews store managers for a project instead of using only online articles. Which research type is being used?",
                    "choices": [
                      "Primary research",
                      "Secondary storage",
                      "Markdown pricing",
                      "Franchise fee"
                    ],
                    "answer": 0,
                    "focusTerm": "primary research",
                    "source": "Dextra original practice",
                    "sourceQuestion": 72
                  },
                  {
                    "prompt": "A cafe asks visitors to taste two recipes and records their preferences. What kind of data collection is this?",
                    "choices": [
                      "Secondary storage",
                      "Markdown pricing",
                      "Franchise fee",
                      "Primary research"
                    ],
                    "answer": 3,
                    "focusTerm": "primary research",
                    "source": "Dextra original practice",
                    "sourceQuestion": 73
                  },
                  {
                    "prompt": "A retailer runs a focus group to test reactions to a new logo. Which term applies?",
                    "choices": [
                      "Markdown pricing",
                      "Franchise fee",
                      "Primary research",
                      "Secondary storage"
                    ],
                    "answer": 2,
                    "focusTerm": "primary research",
                    "source": "Dextra original practice",
                    "sourceQuestion": 74
                  },
                  {
                    "prompt": "A gym emails members a custom questionnaire about class times. What type of research is it conducting?",
                    "choices": [
                      "Franchise fee",
                      "Primary research",
                      "Secondary storage",
                      "Markdown pricing"
                    ],
                    "answer": 1,
                    "focusTerm": "primary research",
                    "source": "Dextra original practice",
                    "sourceQuestion": 75
                  },
                  {
                    "prompt": "A company combines social media posts, email coupons, and in-store signs for one campaign. What is this combination?",
                    "choices": [
                      "Promotion mix",
                      "Balance sheet",
                      "Supply chain",
                      "Unit cost"
                    ],
                    "answer": 0,
                    "focusTerm": "promotion mix",
                    "source": "Dextra original practice",
                    "sourceQuestion": 76
                  },
                  {
                    "prompt": "A nonprofit uses public relations, flyers, and direct messages to promote an event. Which marketing concept is shown?",
                    "choices": [
                      "Balance sheet",
                      "Supply chain",
                      "Unit cost",
                      "Promotion mix"
                    ],
                    "answer": 3,
                    "focusTerm": "promotion mix",
                    "source": "Dextra original practice",
                    "sourceQuestion": 77
                  },
                  {
                    "prompt": "A retailer coordinates ads, sales promotions, and personal selling for a product launch. What is it managing?",
                    "choices": [
                      "Supply chain",
                      "Unit cost",
                      "Promotion mix",
                      "Balance sheet"
                    ],
                    "answer": 2,
                    "focusTerm": "promotion mix",
                    "source": "Dextra original practice",
                    "sourceQuestion": 78
                  },
                  {
                    "prompt": "A restaurant uses radio ads, loyalty app offers, and community sponsorships to reach diners. Which term applies?",
                    "choices": [
                      "Unit cost",
                      "Promotion mix",
                      "Balance sheet",
                      "Supply chain"
                    ],
                    "answer": 1,
                    "focusTerm": "promotion mix",
                    "source": "Dextra original practice",
                    "sourceQuestion": 79
                  },
                  {
                    "prompt": "A brand plans which communication tools will support a new product. What is the brand designing?",
                    "choices": [
                      "Promotion mix",
                      "Balance sheet",
                      "Supply chain",
                      "Unit cost"
                    ],
                    "answer": 0,
                    "focusTerm": "promotion mix",
                    "source": "Dextra original practice",
                    "sourceQuestion": 80
                  }
                ]
              },
              {
                "id": "bac-core-5",
                "title": "Operations and Management",
                "terms": [
                  {
                    "term": "workflow",
                    "definition": "the ordered series of tasks required to complete a process"
                  },
                  {
                    "term": "quality control",
                    "definition": "checking work or products to make sure standards are met"
                  },
                  {
                    "term": "inventory turnover",
                    "definition": "how often inventory is sold and replaced during a period"
                  },
                  {
                    "term": "delegation",
                    "definition": "assigning responsibility for a task to another person"
                  }
                ],
                "questions": [
                  {
                    "prompt": "A bakery maps each step from online order to pickup to find delays. What is it reviewing?",
                    "choices": [
                      "Equity",
                      "Price ceiling",
                      "Brand extension",
                      "Workflow"
                    ],
                    "answer": 3,
                    "focusTerm": "workflow",
                    "source": "Dextra original practice",
                    "sourceQuestion": 81
                  },
                  {
                    "prompt": "A team lists the tasks needed to prepare a shipment from packing to delivery. Which term describes the process?",
                    "choices": [
                      "Price ceiling",
                      "Brand extension",
                      "Workflow",
                      "Equity"
                    ],
                    "answer": 2,
                    "focusTerm": "workflow",
                    "source": "Dextra original practice",
                    "sourceQuestion": 82
                  },
                  {
                    "prompt": "A clinic studies how patients move from check-in to checkout. What is the clinic analyzing?",
                    "choices": [
                      "Brand extension",
                      "Workflow",
                      "Equity",
                      "Price ceiling"
                    ],
                    "answer": 1,
                    "focusTerm": "workflow",
                    "source": "Dextra original practice",
                    "sourceQuestion": 83
                  },
                  {
                    "prompt": "A store diagrams the order of tasks for opening each morning. Which concept is being documented?",
                    "choices": [
                      "Workflow",
                      "Equity",
                      "Price ceiling",
                      "Brand extension"
                    ],
                    "answer": 0,
                    "focusTerm": "workflow",
                    "source": "Dextra original practice",
                    "sourceQuestion": 84
                  },
                  {
                    "prompt": "A restaurant reviews the sequence from seating a guest to processing payment. What is this sequence called?",
                    "choices": [
                      "Equity",
                      "Price ceiling",
                      "Brand extension",
                      "Workflow"
                    ],
                    "answer": 3,
                    "focusTerm": "workflow",
                    "source": "Dextra original practice",
                    "sourceQuestion": 85
                  },
                  {
                    "prompt": "A supervisor checks finished products against standards before shipping. What activity is this?",
                    "choices": [
                      "Credit score",
                      "Price discrimination",
                      "Quality control",
                      "Market share"
                    ],
                    "answer": 2,
                    "focusTerm": "quality control",
                    "source": "Dextra original practice",
                    "sourceQuestion": 86
                  },
                  {
                    "prompt": "A restaurant verifies food temperature and presentation before meals leave the kitchen. Which process is shown?",
                    "choices": [
                      "Price discrimination",
                      "Quality control",
                      "Market share",
                      "Credit score"
                    ],
                    "answer": 1,
                    "focusTerm": "quality control",
                    "source": "Dextra original practice",
                    "sourceQuestion": 87
                  },
                  {
                    "prompt": "A print shop inspects flyers for color and spelling errors before delivery. What is it performing?",
                    "choices": [
                      "Quality control",
                      "Market share",
                      "Credit score",
                      "Price discrimination"
                    ],
                    "answer": 0,
                    "focusTerm": "quality control",
                    "source": "Dextra original practice",
                    "sourceQuestion": 88
                  },
                  {
                    "prompt": "A hotel manager reviews cleaned rooms against a checklist. Which term best applies?",
                    "choices": [
                      "Market share",
                      "Credit score",
                      "Price discrimination",
                      "Quality control"
                    ],
                    "answer": 3,
                    "focusTerm": "quality control",
                    "source": "Dextra original practice",
                    "sourceQuestion": 89
                  },
                  {
                    "prompt": "A software team tests a form to make sure it works before release. What management activity is this?",
                    "choices": [
                      "Credit score",
                      "Price discrimination",
                      "Quality control",
                      "Market share"
                    ],
                    "answer": 2,
                    "focusTerm": "quality control",
                    "source": "Dextra original practice",
                    "sourceQuestion": 90
                  },
                  {
                    "prompt": "A retailer measures how many times shoes sell out and are replaced during a season. Which measure is this?",
                    "choices": [
                      "Operating lease",
                      "Inventory turnover",
                      "Payroll tax",
                      "Customer lifetime value"
                    ],
                    "answer": 1,
                    "focusTerm": "inventory turnover",
                    "source": "Dextra original practice",
                    "sourceQuestion": 91
                  },
                  {
                    "prompt": "A grocery store tracks how quickly produce is sold and restocked. What metric is being watched?",
                    "choices": [
                      "Inventory turnover",
                      "Payroll tax",
                      "Customer lifetime value",
                      "Operating lease"
                    ],
                    "answer": 0,
                    "focusTerm": "inventory turnover",
                    "source": "Dextra original practice",
                    "sourceQuestion": 92
                  },
                  {
                    "prompt": "A warehouse compares annual sales with average stock on hand. Which concept is it calculating?",
                    "choices": [
                      "Payroll tax",
                      "Customer lifetime value",
                      "Operating lease",
                      "Inventory turnover"
                    ],
                    "answer": 3,
                    "focusTerm": "inventory turnover",
                    "source": "Dextra original practice",
                    "sourceQuestion": 93
                  },
                  {
                    "prompt": "A boutique wants to know whether merchandise is moving too slowly. Which measure should it examine?",
                    "choices": [
                      "Customer lifetime value",
                      "Operating lease",
                      "Inventory turnover",
                      "Payroll tax"
                    ],
                    "answer": 2,
                    "focusTerm": "inventory turnover",
                    "source": "Dextra original practice",
                    "sourceQuestion": 94
                  },
                  {
                    "prompt": "A manager says high sales are useful only if stock is replaced at the right pace. Which inventory measure matters?",
                    "choices": [
                      "Operating lease",
                      "Inventory turnover",
                      "Payroll tax",
                      "Customer lifetime value"
                    ],
                    "answer": 1,
                    "focusTerm": "inventory turnover",
                    "source": "Dextra original practice",
                    "sourceQuestion": 95
                  },
                  {
                    "prompt": "A manager asks an assistant to prepare the weekly schedule and gives clear deadlines. Which management action is this?",
                    "choices": [
                      "Delegation",
                      "Depreciation",
                      "Prospecting",
                      "Importing"
                    ],
                    "answer": 0,
                    "focusTerm": "delegation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 96
                  },
                  {
                    "prompt": "A club president assigns a member to handle registration while another manages supplies. What is the president doing?",
                    "choices": [
                      "Depreciation",
                      "Prospecting",
                      "Importing",
                      "Delegation"
                    ],
                    "answer": 3,
                    "focusTerm": "delegation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 97
                  },
                  {
                    "prompt": "A supervisor gives a trained employee responsibility for closing reports. Which term applies?",
                    "choices": [
                      "Prospecting",
                      "Importing",
                      "Delegation",
                      "Depreciation"
                    ],
                    "answer": 2,
                    "focusTerm": "delegation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 98
                  },
                  {
                    "prompt": "A team lead hands off the survey summary to a member who has the needed skills. What management practice is shown?",
                    "choices": [
                      "Importing",
                      "Delegation",
                      "Depreciation",
                      "Prospecting"
                    ],
                    "answer": 1,
                    "focusTerm": "delegation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 99
                  },
                  {
                    "prompt": "A store owner asks a shift leader to train new cashiers. Which action is being used?",
                    "choices": [
                      "Delegation",
                      "Depreciation",
                      "Prospecting",
                      "Importing"
                    ],
                    "answer": 0,
                    "focusTerm": "delegation",
                    "source": "Dextra original practice",
                    "sourceQuestion": 100
                  }
                ]
              }
            ],
        },
        {
          id: "operations",
          title: "Operations and Workflow",
          lessons: [
            {
              id: "bac-ops-1",
              title: "Process Efficiency",
              terms: [
                {
                  term: "workflow",
                  definition: "the ordered series of tasks required to complete a process",
                },
                {
                  term: "efficiency",
                  definition: "producing results with minimal wasted time or resources",
                },
              ],
              questions: [
                {
                  prompt: "A bakery maps every step from order to pickup so delays can be spotted. What is it reviewing?",
                  choices: ["Workflow", "Equity", "Brand extension", "Break-even point"],
                  answer: 0,
                  focusTerm: "workflow",
                },
                {
                  prompt: "A team finishes the same number of orders using less labor time. What improved?",
                  choices: ["Efficiency", "Inflation", "Segmentation", "Sponsorship"],
                  answer: 0,
                  focusTerm: "efficiency",
                },
              ],
            },
            {
              id: "bac-ops-2",
              title: "Standards and Quality",
              terms: [
                {
                  term: "quality standard",
                  definition: "a stated level of performance or consistency a business expects",
                },
                {
                  term: "compliance",
                  definition: "following rules, policies, and required procedures",
                },
              ],
              questions: [
                {
                  prompt: "A restaurant requires every order to be checked before leaving the kitchen. That rule is a what?",
                  choices: ["Quality standard", "Contribution margin", "Publicity", "Market share"],
                  answer: 0,
                  focusTerm: "quality standard",
                },
                {
                  prompt: "An employee follows required safety steps exactly. Which term applies?",
                  choices: ["Compliance", "Diversification", "Liquidity", "Lead generation"],
                  answer: 0,
                  focusTerm: "compliance",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "entrepreneurship",
      code: "ENT",
      title: "Entrepreneurship",
      source: "https://www.decaplus.org/career-clusters/entrepreneurship",
      overview:
        "Opportunity spotting, startup thinking, risk analysis, and growth planning for student entrepreneurs.",
      visual: "lightbulb",
      icon: "assets/category-icons/bulb.svg",
      chapters: [
        {
          id: "venture-basics",
          title: "Venture Basics",
          lessons: [
            {
              id: "ent-venture-1",
              title: "Problem and Solution",
              terms: [
                {
                  term: "value proposition",
                  definition: "the reason customers should choose a product or service because of its unique benefit",
                },
                {
                  term: "feasibility",
                  definition: "how practical and realistic it is to carry out a business idea successfully",
                },
              ],
              questions: [
                {
                  prompt: "A startup explains why its app saves student clubs hours of planning time. Which concept is it presenting?",
                  choices: ["Value proposition", "Depreciation", "Market capitalization", "Compliance"],
                  answer: 0,
                  focusTerm: "value proposition",
                },
                {
                  prompt: "A founder checks whether enough students would actually pay for a tutoring service before launching. What are they testing?",
                  choices: ["Feasibility", "Inventory shrinkage", "Benchmarking", "Turnover"],
                  answer: 0,
                  focusTerm: "feasibility",
                },
              ],
            },
            {
              id: "ent-venture-2",
              title: "Risk and Growth",
              terms: [
                {
                  term: "risk",
                  definition: "the possibility that an action or decision may lead to loss or a weaker outcome",
                },
                {
                  term: "scalability",
                  definition: "the ability of a business to grow without losing effectiveness",
                },
              ],
              questions: [
                {
                  prompt: "A founder could lose money if demand for a product is overestimated. What is that uncertainty called?",
                  choices: ["Risk", "Revenue", "Segmentation", "Brand equity"],
                  answer: 0,
                  focusTerm: "risk",
                },
                {
                  prompt: "An online product can add thousands of users with only a small increase in cost. Which startup trait does that show?",
                  choices: ["Scalability", "Liquidity", "Service recovery", "Job specialization"],
                  answer: 0,
                  focusTerm: "scalability",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "marketing",
      code: "MKT",
      title: "Marketing",
      source: "https://www.decaplus.org/exams/marketing",
      overview:
        "Core marketing concepts including audience targeting, promotion, branding, and channel strategy.",
      visual: "computer",
      icon: "assets/category-icons/laptop.svg",
      chapters: [
        {
          id: "branding",
          title: "Branding and Positioning",
          lessons: [
            {
              id: "mkt-brand-1",
              title: "Brand Identity",
              terms: [
                {
                  term: "brand identity",
                  definition: "the visual and verbal elements a company uses to present itself",
                },
                {
                  term: "positioning",
                  definition: "the place a brand aims to hold in a customer's mind relative to competitors",
                },
              ],
              questions: [
                {
                  prompt: "A company updates its logo, voice, and color system to feel more premium. What is it refining?",
                  choices: ["Brand identity", "Accounts payable", "Amortization", "Throughput"],
                  answer: 0,
                  focusTerm: "brand identity",
                },
                {
                  prompt: "A snack brand wants customers to think of it as the healthiest option on campus. What is it shaping?",
                  choices: ["Positioning", "Cash flow", "Compliance", "Procurement"],
                  answer: 0,
                  focusTerm: "positioning",
                },
              ],
            },
            {
              id: "mkt-brand-2",
              title: "Audience Fit",
              terms: [
                {
                  term: "segmentation",
                  definition: "dividing a broad market into smaller groups with shared needs",
                },
                {
                  term: "persona",
                  definition: "a realistic profile representing a target customer group",
                },
              ],
              questions: [
                {
                  prompt: "A campaign is split for freshmen, athletes, and staff because each group responds differently. What tactic is that?",
                  choices: ["Segmentation", "Auditing", "Depreciation", "Arbitrage"],
                  answer: 0,
                  focusTerm: "segmentation",
                },
                {
                  prompt: "A team writes a profile for 'Mia, age 16, busy and social, wants quick study snacks.' What did they create?",
                  choices: ["Persona", "Benchmark", "Invoice", "Asset"],
                  answer: 0,
                  focusTerm: "persona",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "finance",
      code: "FIN",
      title: "Finance",
      source: "https://www.decaplus.org/career-clusters/finance",
      overview:
        "Decision-making concepts around budgeting, financial analysis, and customer financial services.",
      visual: "piggybank",
      icon: "assets/category-icons/pig-money.svg",
      chapters: [
        {
          id: "budgeting",
          title: "Budgeting Essentials",
          lessons: [
            {
              id: "fin-budget-1",
              title: "Revenue and Expense",
              terms: [
                {
                  term: "revenue",
                  definition: "the money a business earns from its normal operations",
                },
                {
                  term: "expense",
                  definition: "the cost a business incurs to run operations",
                },
              ],
              questions: [
                {
                  prompt: "Money earned from selling school-store hoodies is best labeled as what?",
                  choices: ["Revenue", "Liability", "Equity", "Collateral"],
                  answer: 0,
                  focusTerm: "revenue",
                },
                {
                  prompt: "The cost of buying inventory for those hoodies is what kind of item?",
                  choices: ["Expense", "Dividend", "Market segment", "Brand asset"],
                  answer: 0,
                  focusTerm: "expense",
                },
              ],
            },
            {
              id: "fin-budget-2",
              title: "Profit and Margin",
              terms: [
                {
                  term: "profit",
                  definition: "the amount remaining after expenses are subtracted from revenue",
                },
                {
                  term: "margin",
                  definition: "profit expressed relative to sales, often as a percentage",
                },
              ],
              questions: [
                {
                  prompt: "A fundraiser brings in $1,000 and costs $700 to run. The remaining $300 is what?",
                  choices: ["Profit", "Collateral", "Inventory", "Turnover"],
                  answer: 0,
                  focusTerm: "profit",
                },
                {
                  prompt: "A business compares profit to total sales to judge strength. Which measure is that?",
                  choices: ["Margin", "Demand curve", "Amortization", "Brand identity"],
                  answer: 0,
                  focusTerm: "margin",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "hospitality-tourism",
      code: "HT",
      title: "Hospitality and Tourism",
      source: "https://www.decaplus.org/career-clusters/hospitality-and-tourism",
      overview:
        "Guest experience, service systems, travel operations, and hospitality standards across tourism businesses.",
      visual: "airplane",
      icon: "assets/category-icons/plane.svg",
      chapters: [
        {
          id: "guest-experience",
          title: "Guest Experience",
          lessons: [
            {
              id: "ht-guest-1",
              title: "Guest Expectations",
              terms: [
                {
                  term: "guest satisfaction",
                  definition: "the degree to which an experience meets or exceeds a guest's expectations",
                },
                {
                  term: "service standard",
                  definition: "a specific expected level of service quality or behavior",
                },
              ],
              questions: [
                {
                  prompt: "A hotel tracks whether guests feel check-in was smooth and welcoming. What is it measuring?",
                  choices: ["Guest satisfaction", "Gross margin", "Brand extension", "Collateral"],
                  answer: 0,
                  focusTerm: "guest satisfaction",
                },
                {
                  prompt: "A tourism company requires every guide to greet guests within 30 seconds. What type of expectation is that?",
                  choices: ["Service standard", "Supply shock", "Variable cost", "Merchandising"],
                  answer: 0,
                  focusTerm: "service standard",
                },
              ],
            },
            {
              id: "ht-guest-2",
              title: "Travel Coordination",
              terms: [
                {
                  term: "itinerary",
                  definition: "a planned schedule of travel activities, locations, and times",
                },
                {
                  term: "capacity",
                  definition: "the maximum number of guests or bookings a business can handle",
                },
              ],
              questions: [
                {
                  prompt: "A travel agent outlines flights, hotel check-in, and tour times for a client. What document is that?",
                  choices: ["Itinerary", "Budget variance", "Equity statement", "Sales funnel"],
                  answer: 0,
                  focusTerm: "itinerary",
                },
                {
                  prompt: "An amusement park limits ticket sales because too many guests would lower the experience. Which operational concept matters here?",
                  choices: ["Capacity", "Liquidity", "Positioning", "Compliance"],
                  answer: 0,
                  focusTerm: "capacity",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  roleplayGroups: [
    {
      id: "team",
      label: "Team Decision Making",
      itemIds: ["bltdm", "btdm", "etdm", "ftdm", "htdm", "mtdm", "stdm", "ttdm"],
    },
    {
      id: "principles",
      label: "Principles",
      itemIds: ["pbm", "pen", "pfn", "pht", "pmk"],
    },
    {
      id: "series",
      label: "Individual Series",
      itemIds: [
        "act",
        "aam",
        "asm",
        "bfs",
        "bsm",
        "ent",
        "fms",
        "hlm",
        "hrm",
        "mcs",
        "qsrm",
        "rfsm",
        "rms",
        "sem",
      ],
    },
    {
      id: "kpis",
      label: "Individual KPIs",
      itemIds: [
        "bl163",
        "bl067",
        "bl068",
        "bl051",
        "bl001",
        "bl070",
        "bl071",
        "bl072",
        "bl073",
        "bl074",
      ],
    },
  ],
  roleplays: [
    {
      id: "bltdm",
      title: "BLTDM",
      name: "Business Law and Ethics Team Decision Making",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/briefcase.svg",
      theme: "yellow",
      summary: "Two-person team event focused on business law and ethics decision-making.",
    },
    {
      id: "btdm",
      title: "BTDM",
      name: "Buying and Merchandising Team Decision Making",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/laptop.svg",
      theme: "red",
      summary: "Two-person team event centered on merchandising and retail decision-making.",
    },
    {
      id: "etdm",
      title: "ETDM",
      name: "Entrepreneurship Team Decision Making",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/bulb.svg",
      theme: "gray",
      summary: "Two-person entrepreneurship case event focused on startup and venture decisions.",
    },
    {
      id: "ftdm",
      title: "FTDM",
      name: "Financial Services Team Decision Making",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/pig-money.svg",
      theme: "green",
      summary: "Two-person finance team case event around financial-services recommendations.",
    },
    {
      id: "htdm",
      title: "HTDM",
      name: "Hospitality Services Team Decision Making",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/plane.svg",
      theme: "blue",
      summary: "Two-person hospitality case event focused on service and guest experience decisions.",
    },
    {
      id: "mtdm",
      title: "MTDM",
      name: "Marketing Management Team Decision Making",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/laptop.svg",
      theme: "red",
      summary: "Two-person marketing case event focused on campaign and management strategy.",
    },
    {
      id: "stdm",
      title: "STDM",
      name: "Sports and Entertainment Marketing Team Decision Making",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/laptop.svg",
      theme: "red",
      summary: "Two-person sports and entertainment marketing case event.",
    },
    {
      id: "ttdm",
      title: "TTDM",
      name: "Travel and Tourism Team Decision Making",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/plane.svg",
      theme: "blue",
      summary: "Two-person tourism and travel case event focused on destination and service decisions.",
    },
    {
      id: "pbm",
      title: "PBM",
      name: "Principles of Business Management and Administration",
      source: "https://www.decaplus.org/competitive-events/principles-of-business-management-and-administration",
      icon: "assets/category-icons/briefcase.svg",
      theme: "yellow",
      summary:
        "First-year role-play event focused on core management concepts, one role-play, ten minutes prep and ten minutes presentation.",
    },
    {
      id: "pen",
      title: "PEN",
      name: "Principles of Entrepreneurship",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/bulb.svg",
      theme: "gray",
      summary: "First-year role-play event focused on entrepreneurship fundamentals.",
    },
    {
      id: "pfn",
      title: "PFN",
      name: "Principles of Finance",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/pig-money.svg",
      theme: "green",
      summary: "First-year role-play event focused on core finance concepts and decisions.",
    },
    {
      id: "pht",
      title: "PHT",
      name: "Principles of Hospitality and Tourism",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/plane.svg",
      theme: "blue",
      summary: "First-year role-play event focused on hospitality and tourism concepts.",
    },
    {
      id: "pmk",
      title: "PMK",
      name: "Principles of Marketing",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/laptop.svg",
      theme: "red",
      summary: "First-year role-play event focused on core marketing concepts.",
    },
    {
      id: "act",
      title: "ACT",
      name: "Accounting Applications Series",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/pig-money.svg",
      theme: "green",
      summary: "Individual series event focused on accounting applications and financial records.",
    },
    {
      id: "aam",
      title: "AAM",
      name: "Apparel and Accessories Marketing Series",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/laptop.svg",
      theme: "red",
      summary: "Individual series event focused on fashion and accessory marketing.",
    },
    {
      id: "asm",
      title: "ASM",
      name: "Automotive Services Marketing Series",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/laptop.svg",
      theme: "red",
      summary: "Individual series event focused on automotive service and marketing strategy.",
    },
    {
      id: "bfs",
      title: "BFS",
      name: "Business Finance Series",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/pig-money.svg",
      theme: "green",
      summary: "Individual series event focused on finance operations and business decision-making.",
    },
    {
      id: "bsm",
      title: "BSM",
      name: "Business Services Marketing Series",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/laptop.svg",
      theme: "red",
      summary: "Individual series event focused on marketing services to business customers.",
    },
    {
      id: "ent",
      title: "ENT",
      name: "Entrepreneurship Series",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/bulb.svg",
      theme: "gray",
      summary: "Individual series event focused on venture thinking and entrepreneurial decision-making.",
    },
    {
      id: "fms",
      title: "FMS",
      name: "Food Marketing Series",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/laptop.svg",
      theme: "red",
      summary: "Individual series event focused on food and grocery marketing strategy.",
    },
    {
      id: "hlm",
      title: "HLM",
      name: "Hotel and Lodging Management Series",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/plane.svg",
      theme: "blue",
      summary: "Individual series event focused on hotel and lodging management decisions.",
    },
    {
      id: "hrm",
      title: "HRM",
      name: "Human Resources Management Series",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/briefcase.svg",
      theme: "yellow",
      summary: "Individual series event focused on hiring, training, and employee management.",
    },
    {
      id: "mcs",
      title: "MCS",
      name: "Marketing Communications Series",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/laptop.svg",
      theme: "red",
      summary: "Individual series event focused on communication strategy and promotional messaging.",
    },
    {
      id: "qsrm",
      title: "QSRM",
      name: "Quick Serve Restaurant Management Series",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/plane.svg",
      theme: "blue",
      summary: "Individual series event focused on fast-casual and quick-service restaurant management.",
    },
    {
      id: "rfsm",
      title: "RFSM",
      name: "Restaurant and Food Service Management Series",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/plane.svg",
      theme: "blue",
      summary: "Individual series event focused on restaurant operations and service management.",
    },
    {
      id: "rms",
      title: "RMS",
      name: "Retail Merchandising Series",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/laptop.svg",
      theme: "red",
      summary: "Individual series event focused on retail, merchandising, and store performance.",
    },
    {
      id: "sem",
      title: "SEM",
      name: "Sports and Entertainment Marketing Series",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/laptop.svg",
      theme: "red",
      summary: "Individual series event focused on sports, entertainment, and fan-focused marketing decisions.",
    },
    {
      id: "bl163",
      title: "BL:163",
      name: "Comply with the spirit and intent of laws and regulations",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/briefcase.svg",
      theme: "yellow",
      summary: "Individual KPI for business law and ethics case preparation. Cluster suffix: CS.",
    },
    {
      id: "bl067",
      title: "BL:067",
      name: "Discuss the nature of law and sources of law in the United States",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/briefcase.svg",
      theme: "yellow",
      summary: "Individual KPI for business law case preparation. Cluster suffix: SP.",
    },
    {
      id: "bl068",
      title: "BL:068",
      name: "Describe the United States' judicial system",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/briefcase.svg",
      theme: "yellow",
      summary: "Individual KPI for business law case preparation. Cluster suffix: SP.",
    },
    {
      id: "bl051",
      title: "BL:051",
      name: "Describe methods used to protect intellectual property",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/briefcase.svg",
      theme: "yellow",
      summary: "Individual KPI for business law case preparation. Cluster suffix: SP.",
    },
    {
      id: "bl001",
      title: "BL:001",
      name: "Describe legal issues affecting businesses",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/briefcase.svg",
      theme: "yellow",
      summary: "Individual KPI for business law case preparation. Cluster suffix: SP.",
    },
    {
      id: "bl070",
      title: "BL:070",
      name: "Describe the nature of legal procedure",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/briefcase.svg",
      theme: "yellow",
      summary: "Individual KPI for business law case preparation. Cluster suffix: SP.",
    },
    {
      id: "bl071",
      title: "BL:071",
      name: "Discuss the nature of debtor-creditor relationships",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/briefcase.svg",
      theme: "yellow",
      summary: "Individual KPI for business law case preparation. Cluster suffix: SP.",
    },
    {
      id: "bl072",
      title: "BL:072",
      name: "Explain the nature of agency relationships",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/briefcase.svg",
      theme: "yellow",
      summary: "Individual KPI for business law case preparation. Cluster suffix: SP.",
    },
    {
      id: "bl073",
      title: "BL:073",
      name: "Discuss the nature of environmental law",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/briefcase.svg",
      theme: "yellow",
      summary: "Individual KPI for business law case preparation. Cluster suffix: SP.",
    },
    {
      id: "bl074",
      title: "BL:074",
      name: "Discuss the role of administrative law",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/briefcase.svg",
      theme: "yellow",
      summary: "Individual KPI for business law case preparation. Cluster suffix: SP.",
    },
  ],
  writtens: [
    {
      id: "pitch-deck",
      title: "Pitch Deck",
      name: "Pitch Deck",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/file-description.svg",
      theme: "yellow",
      summary: "Prepared presentations and pitch-style events built around a visual slide deck and live presentation.",
    },
    {
      id: "written",
      title: "Written",
      name: "Written",
      source: "https://www.deca.org/compete",
      icon: "assets/category-icons/file-description.svg",
      theme: "gray",
      summary: "Prepared written-event tracks including plans, research events, projects, and integrated campaigns.",
    },
  ],
};

function cloneLearningEntry(entry) {
  return JSON.parse(JSON.stringify(entry));
}

function syncBusinessAdminCoreLessons() {
  const bacCategory = DEXTRA_LEARNING_DATA.testingCategories.find((category) => category.id === "bac");
  const bmaCategory = DEXTRA_LEARNING_DATA.testingCategories.find((category) => category.id === "bma");
  const bacCustomerRelations = bacCategory?.chapters.find((chapter) => chapter.id === "bac-customer-relations");
  const bmaCustomerRelations = bmaCategory?.chapters.find((chapter) => chapter.id === "customer-relations");

  if (!bacCustomerRelations || !bmaCustomerRelations) {
    return;
  }

  bmaCustomerRelations.lessons = bacCustomerRelations.lessons.slice(0, 5).map((lesson, index) => ({
    ...cloneLearningEntry(lesson),
    id: `bma-customer-${index + 1}`,
  }));
}

syncBusinessAdminCoreLessons();

window.DEXTRA_LEARNING_DATA = DEXTRA_LEARNING_DATA;
