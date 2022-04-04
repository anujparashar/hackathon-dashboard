export const USER_DATA = {
    "users":[
        {
            "userId": "admin1",
            "roles": [
                {
                    "role": "admin",
                    "features": ["view-challenges", 'add-challenges', 'manage-challenges', "delete-challenges"]
                }
            ]
        },
        {
            "userId": "candidate1",
            "roles": [
                {
                    "role": "candidate",
                    "features": ["view-challenge"]
                }
            ]
        }
    ]
}
