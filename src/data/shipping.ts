
export const provinces = {
  "rajaongkir": {
    "query": [],
    "status": {
      "code": 200,
      "description": "OK"
    },
    "results": [
      {
        "province_id": "1",
        "province": "Bali"
      },
      {
        "province_id": "2",
        "province": "Bangka Belitung"
      },
      {
        "province_id": "3",
        "province": "Banten"
      }
    ]
  }
};

export const cities = {
  "1": {
    "rajaongkir": {
      "query": {
        "province": "1"
      },
      "status": {
        "code": 200,
        "description": "OK"
      },
      "results": [
        {
          "city_id": "1",
          "province_id": "1",
          "province": "Bali",
          "type": "Kabupaten",
          "city_name": "Badung",
          "postal_code": "80351"
        },
        {
          "city_id": "2",
          "province_id": "1",
          "province": "Bali",
          "type": "Kabupaten",
          "city_name": "Bangli",
          "postal_code": "80619"
        }
      ]
    }
  },
  "2": {
    "rajaongkir": {
      "query": {
        "province": "2"
      },
      "status": {
        "code": 200,
        "description": "OK"
      },
      "results": [
        {
          "city_id": "3",
          "province_id": "2",
          "province": "Bangka Belitung",
          "type": "Kabupaten",
          "city_name": "Bangka",
          "postal_code": "33212"
        },
        {
          "city_id": "4",
          "province_id": "2",
          "province": "Bangka Belitung",
          "type": "Kabupaten",
          "city_name": "Bangka Barat",
          "postal_code": "33315"
        }
      ]
    }
  }
};

export const costs = {
  "rajaongkir": {
    "query": {
      "origin": "501",
      "destination": "114",
      "weight": 1700,
      "courier": "jne"
    },
    "status": {
      "code": 200,
      "description": "OK"
    },
    "origin_details": {
      "city_id": "501",
      "province_id": "5",
      "province": "DI Yogyakarta",
      "type": "Kota",
      "city_name": "Yogyakarta",
      "postal_code": "55000"
    },
    "destination_details": {
      "city_id": "114",
      "province_id": "1",
      "province": "Bali",
      "type": "Kota",
      "city_name": "Denpasar",
      "postal_code": "80000"
    },
    "results": [
      {
        "code": "jne",
        "name": "Jalur Nugraha Ekakurir (JNE)",
        "costs": [
          {
            "service": "OKE",
            "description": "Ongkos Kirim Ekonomis",
            "cost": [
              {
                "value": 27000,
                "etd": "4-5",
                "note": ""
              }
            ]
          },
          {
            "service": "REG",
            "description": "Layanan Reguler",
            "cost": [
              {
                "value": 31000,
                "etd": "2-3",
                "note": ""
              }
            ]
          }
        ]
      }
    ]
  }
};
