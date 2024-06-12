<template>
    <div>
        <h1>Create User</h1>
        <NuxtLink to="/" target="_blank">
            Go to Home Page
        </NuxtLink>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">Name:</label>
                <input type="text" v-model="form.name" id="name" required />
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" v-model="form.email" id="email" required />
            </div>
            <div>
                <label for="number">Number:</label>
                <input type="number" v-model="form.number" id="number" required />
            </div>
            <button type="submit">Submit</button>
        </form>
        <button @click="retrieveUsers">Update user list</button>
    </div>
    <div>
        {{ data }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                number: '',
            }
        }
    },
    methods: {
        async retrieveUsers() {
            try {
                const response = await fetch('http://api:8080/users', {
                    method: 'GET'
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                alert('Users retrieved !');
                console.log(data);
            } catch (error) {
                alert('Error creating user: ' + error.message);
            }
        },

        async submitForm() {
            try {
                const response = await fetch('http://api:8080/adduser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.form)
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                alert('User created successfully!');
                console.log(data);
            } catch (error) {
                alert('Error creating user: ' + error.message);
            }
        }
    }
}
</script>