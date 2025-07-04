const config = {
  "property": {
    "streetAddress": "5 Maple Ave North",
    "city": "Burford",
    "cityStateZip": "Burford, ON N0E 1A0",
    "heroSubtitle": "Move in ready freehold home in the cute town of Burford. Listing price: $549,900. 3 beds, 2 baths. Discover the charm and comfort of this welcoming neighbourhood! Register to receive the full Home & Neighbourhood Info Package, virtual tour and floor plans.",
    "backgroundImageUrl": "https://i.ibb.co/3ywSRNzG/Screenshot-2025-06-20-at-9-49-32-a-m.png"
  },
  "realtor": {
    "fullName": "Alex & Georgia",
    "title": "The Rise Realty Group",
    "phone": "519-209-2721",
    "email": "info@theriserealtygroup.ca",
    "bio": "Rise Realty Group was established with one core principle in mind: to provide the best real estate experience possible. With over 20 years of experience in the real estate industry and a deep commitment to our community, our mission is to help you make informed decisions and provide clarity even in complex situations. Real estate is not just about transactions; it’s about building relationships and fostering trust. We strive to deliver exceptional results and raise your expectations.",
    "photoUrl": "https://i.ibb.co/gFXn9nnR/Alex-Georgia.png",
    "social": {
      "facebook": "https://www.facebook.com/theriserealtygroup/",
      "instagram": "https://www.instagram.com/theriserealtygroup/",
      "website": "https://theriserealtygroup.ca/"
    }
  },
  "brokerage": {
    "name": "Real Broker LTD",
    "logoUrl": "https://images.squarespace-cdn.com/content/v1/6500bf2a41a7313ebe80123a/1694547764309-J7G2Y5FUGUV9PFXRBEN5/real+broker+logo.png",
    "address": "218 Brant Avenue, Brantford ON N3T 3H9"
  },
  "openHouse": {
    "eventDate": "2025-06-21",
    "additionalDates": [
      "2025-06-22"
    ],
    "bundleItems": [
      {
        "icon": "fas fa-link",
        "text": "Property Listing URL"
      },
      {
        "icon": "fas fa-image",
        "text": "Photos"
      },
      {
        "icon": "fas fa-video",
        "text": "Virtual Tour"
      },
      {
        "icon": "fas fa-chart-line",
        "text": "Recent Neighborhood Sales"
      },
      {
        "icon": "fas fa-home",
        "text": "On-Market Comparables"
      },
      {
        "icon": "fas fa-ruler-combined",
        "text": "Floor Plan"
      }
    ]
  },
  "meta": {
    "pageTitlePrefix": "🏡 Ashley Veldkamp Open House",
    "navBrandLogoText": "OPEN HOUSE",
    "privacyPolicyLink": "https://theriserealtygroup.ca/"
  },
  "settings": {
    "adminWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouseupdate",
    "visitorWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouse",
    "confettiColors": [
      "#627EBF",
      "#E8E1CF",
      "#FFFFFF",
      "#7CB87E",
      "#E6B067"
    ]
  },
  "modalQuestions": [
    {
      "id": "agent_status",
      "questionText": "Are you currently exploring homes with a real estate agent?",
      "options": [
        {
          "value": "committed",
          "text": "Yes, I'm committed to an agent."
        },
        {
          "value": "not_committed",
          "text": "No, I'm not committed to an agent."
        },
        {
          "value": "gathering_info",
          "text": "Just gathering information at this stage."
        }
      ]
    },
    {
      "id": "interest_level",
      "questionText": "How interested are you in properties like this?",
      "options": [
        {
          "value": "very_interested",
          "text": "Very interested, actively looking."
        },
        {
          "value": "somewhat_interested",
          "text": "Somewhat interested, keeping options open."
        },
        {
          "value": "just_browsing",
          "text": "Just browsing for now."
        }
      ]
    },
    {
      "id": "neighborhood_engagement",
      "questionText": "How do you usually enjoy the neighborhood?",
      "options": [
        {
          "value": "resident_explorer",
          "text": "I live here and love exploring locally."
        },
        {
          "value": "considering_move",
          "text": "I'm considering moving to this area."
        },
        {
          "value": "just_visiting",
          "text": "Just visiting for the open house."
        }
      ]
    },
    {
      "id": "feature_attraction",
      "questionText": "What feature attracted you to this home?",
      "options": [
        {
          "value": "design_layout",
          "text": "The design and layout."
        },
        {
          "value": "location_neighborhood",
          "text": "The location and neighborhood."
        },
        {
          "value": "home_price",
          "text": "The price of the home."
        }
      ]
    }
  ],
  "deploymentInfo": {
    "repoName": "Open-House-686",
    "repoUrl": "https://github.com/arslvn93/Open-House-686",
    "netlifyUrl": "https://services.leadconnectorhq.com/hooks/Vud9IvQgadBxXiYKXAnX/webhook-trigger/Xpxt48M9IoSkLw8u6veV",
    "siteId": "4e70ca5a-e077-4a1c-862b-6653b8b7c7d5",
    "tag": "Open House 5 Maple Ave North"
  }
};