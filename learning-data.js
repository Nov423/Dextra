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
          lessons: [
            {
              id: "bac-core-1",
              title: "Customer Value Basics",
              terms: [
                {
                  term: "formal communication",
                  definition: "communication that follows official company channels and accepted structure",
                },
                {
                  term: "downward communication",
                  definition: "communication that flows from higher levels of an organization to lower levels",
                },
                {
                  term: "customer value",
                  definition: "the balance between what a buyer receives and what the buyer gives up",
                },
                {
                  term: "target market",
                  definition: "the specific group of customers a business is trying to serve",
                },
              ],
              questions: [
                {
                  prompt:
                    "XRT Corporation's human-resources manager sends a memo to all employees that describes some general changes that will affect their healthcare insurance next year. This is an example of __________ communication.",
                  choices: [
                    "mass, upward",
                    "lateral, downward",
                    "formal, downward",
                    "verbal, upward",
                  ],
                  answer: 2,
                  focusTerm: "formal communication",
                },
                {
                  prompt: "A store improves service speed and keeps prices steady. Which term best describes the added benefit customers feel?",
                  choices: ["Customer value", "Fixed cost", "Depreciation", "Benchmarking"],
                  answer: 0,
                  focusTerm: "customer value",
                },
                {
                  prompt: "A chapter coffee cart only markets to students rushing to first period. Which term fits that group?",
                  choices: ["Target market", "Liability", "Supply chain", "Net profit"],
                  answer: 0,
                  focusTerm: "target market",
                },
              ],
            },
            {
              id: "bac-core-2",
              title: "Service Recovery",
              terms: [
                {
                  term: "service recovery",
                  definition: "the actions a business takes to fix a customer problem after a mistake",
                },
                {
                  term: "loyalty",
                  definition: "the tendency of customers to keep returning to the same business",
                },
              ],
              questions: [
                {
                  prompt: "A manager offers a replacement and apology after an order mistake. What business skill is being used?",
                  choices: ["Service recovery", "Asset turnover", "Inventory markdown", "Franchising"],
                  answer: 0,
                  focusTerm: "service recovery",
                },
                {
                  prompt: "A brand rewards repeat buyers so they keep coming back. What result is the company trying to build?",
                  choices: ["Loyalty", "Debt ratio", "Scarcity", "Compliance"],
                  answer: 0,
                  focusTerm: "loyalty",
                },
              ],
            },
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
          lessons: [
            {
              id: "bac-customer-1",
              title: "Customer Value Basics",
              terms: [
                {
                  term: "customer value",
                  definition: "the balance between what a buyer receives and what the buyer gives up",
                },
                {
                  term: "target market",
                  definition: "the specific group of customers a business is trying to serve",
                },
              ],
              questions: [
                {
                  prompt: "A store improves service speed and keeps prices steady. Which term best describes the added benefit customers feel?",
                  choices: ["Customer value", "Fixed cost", "Depreciation", "Benchmarking"],
                  answer: 0,
                  focusTerm: "customer value",
                },
                {
                  prompt: "A chapter coffee cart only markets to students rushing to first period. Which term fits that group?",
                  choices: ["Target market", "Liability", "Supply chain", "Net profit"],
                  answer: 0,
                  focusTerm: "target market",
                },
              ],
            },
            {
              id: "bac-customer-2",
              title: "Service Recovery",
              terms: [
                {
                  term: "service recovery",
                  definition: "the actions a business takes to fix a customer problem after a mistake",
                },
                {
                  term: "loyalty",
                  definition: "the tendency of customers to keep returning to the same business",
                },
              ],
              questions: [
                {
                  prompt: "A manager offers a replacement and apology after an order mistake. What business skill is being used?",
                  choices: ["Service recovery", "Asset turnover", "Inventory markdown", "Franchising"],
                  answer: 0,
                  focusTerm: "service recovery",
                },
                {
                  prompt: "A brand rewards repeat buyers so they keep coming back. What result is the company trying to build?",
                  choices: ["Loyalty", "Debt ratio", "Scarcity", "Compliance"],
                  answer: 0,
                  focusTerm: "loyalty",
                },
              ],
            },
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

window.DEXTRA_LEARNING_DATA = DEXTRA_LEARNING_DATA;
