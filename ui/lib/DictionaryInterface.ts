interface DictionaryInterface {
    navigation: {
        about: string;
        skills: string;
        projects: string;
        "work experience": string;
        testimonials: string;
        resume: string;
        name: string;
    };
    page: {
        landingpage: {
            name: string;
            "typeout string1": string;
            "typeout string2": string;
            "enter btn": string;
        };
        about: {
            paragraph1: string;
            paragraph2: string;
            "learn more header": {
                header: string;
                skills: string;
                projects: string;
                "work experience": string;
                testamonials: string; // Note: should this be "testimonials"?
                resume: string;
            };
        };
        skills: {
            header: string;
            paragraph: string;
        };
        projects: {
            header: string;
            chatroom: {
                header: string;
                description: string;
            };
            movingexpress: {
                header: string;
                description: string;
            };
            quizcode: {
                header: string;
                description: string;
            };
            librarymanager: {
                header: string;
                description: string;
            };
            smarthomehub: {
                header: string;
                description: string;
            };
        };
        workexperience: {
            header: string;
            job1: {
                name: string;
                description: string;
                period: string;
            };
            job2: {
                name: string;
                description: string;
                period: string;
            };
            job3: {
                name: string;
                description: string;
                period: string;
            };
        };
        testimonials: {
            header: string;
            subheader: string;
            description: string;
        };
    };
}
