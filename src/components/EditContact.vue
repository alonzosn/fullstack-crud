<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div v-if="errors.length" class="alert alert-danger mt-4">
                        <ul class="mb-0">
                            <li v-for="(error, index) in errors" :key="index">
                                {{ error }}
                            </li>
                        </ul>
                    </div>
                    <form @submit.prevent="updateContact" novalidate>
                        <fieldset>
                            <div class="form-group">
                                <label class="form-label mt-4">Name</label>
                                <input v-model="contact.name" type="text" class="form-control" placeholder="Enter Name">
                            </div>
                            <div class="form-group">
                                <label class="form-label mt-4">Email</label>
                                <input v-model="contact.email" type="email" class="form-control" placeholder="Enter Email">
                            </div>
                            <div class="form-group">
                                <label class="form-label mt-4">Designation</label>
                                <input v-model="contact.designation" type="text" class="form-control" placeholder="Enter Designation">
                            </div>
                            <div class="form-group">
                                <label class="form-label mt-4">Enter Contact Number</label>
                                <input v-model="contact.contact_no" type="text" class="form-control" placeholder="Enter Contact Number ">
                            </div>
                            <button class="btn btn-primary mt-4">Submit</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default{
    name: 'EditContact',
    data() {
        return {
            contact: {},
            name: '',
            email: '',
            designation: '',
            contact_no: '',
            errors: []
        }
    },
    created() {
        this.getContactById();
    },
    methods: {
        async getContactById(){
            let url = `http://127.0.0.1:8000/api/get_contact/${this.$route.params.id}`;
            await axios.get(url).then(response => {
                console.log(response);
                this.contact = response.data;
            });
        },
        async updateContact() {
            this.errors = [];
            if (!this.contact.name) {
                this.errors.push("Name is required")
            }
            if (!this.contact.email) {
                this.errors.push("Email is required")
            }
            if (!this.contact.designation) {
                this.errors.push("Designation is required")
            }
            if (!this.contact.contact_no) {
                this.errors.push("Contact number is required")
            }

            if (!this.errors.length) {
                let formData = new FormData();
                formData.append('name', this.contact.name);
                formData.append('email', this.contact.email);
                formData.append('designation', this.contact.designation);
                formData.append('contact_no', this.contact.contact_no);
                let url = `http://127.0.0.1:8000/api/update_contact/${this.$route.params.id}`;
                await axios.post(url, formData).then((response) => {
                    console.log(response);
                    if(response.status == 200) {
                        alert(response.data.message);
                    } else {
                        console.log('error');
                    }
                }).catch(error => {
                    this.errors.push(error.response);
                });
            }
        }
    },
    mounted: function() {
        console.log('Edit component is opened');
    }
}
</script>