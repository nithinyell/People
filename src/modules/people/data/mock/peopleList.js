// Mock People List

const mockPeopleList = async () => {
    try {
        const mockResponse = {
            "people": [
                {
                "name": "Chris Kong",
                "email": "christ.kong@email.com",
                "emailType": "Work",
                "phoneNumbers": [
                    {
                    "type": "Work",
                    "number": "1-222-123-4567"
                    },
                    {
                    "type": "Cell",
                    "number": "1-999-987-6543"
                    }
                ]
                },
                {
                "name": "Mark Balaban",
                "email": "mark.balaban@email.com",
                "emailType": "Work",
                "phoneNumbers": [
                    {
                    "type": "Work",
                    "number": "1-333-456-7890"
                    }
                ]
                },
                {
                "name": "Brock Dubois",
                "email": "brock.dubois@myemail.com",
                "emailType": "Personal",
                "phoneNumbers": [
                    {
                    "type": "Cell",
                    "number": "1-111-234-5678"
                    }
                ]
                },
                {
                "name": "Conway Twitty",
                "email": "twitty.con@hellodarlin.com",
                "emailType": "Personal",
                "phoneNumbers": [
                    {
                    "type": "Cell",
                    "number": "1-555-555-5555"
                    },
                    {
                    "type": "Work",
                    "number": "1-888-777-6666"
                    }
                ]
                },
                {
                "name": "Alan Jackson",
                "email": "yonder@chatahoochie.com",
                "emailType": "Personal",
                "phoneNumbers": [
                    {
                    "type": "Work",
                    "number": "1-432-587-0973"
                    }
                ]
                },
                {
                "name": "Patsy Cline",
                "email": "walking@aftermidnight.com",
                "emailType": "Work",
                "phoneNumbers": [
                    {
                    "type": "Cell",
                    "number": "1-999-023-3333"
                    }
                ]
                },
                {
                "name": "Hank Williams Jr",
                "email": "h.williamsjr@tearinmybear.com",
                "emailType": "Personal",
                "phoneNumbers": [
                    {
                    "type": "Cell",
                    "number": "1-111-222-3333"
                    }
                ]
                }
            ]
        };
        return mockResponse;
    } catch(error) {
        throw error;
    }
}

export { mockPeopleList };