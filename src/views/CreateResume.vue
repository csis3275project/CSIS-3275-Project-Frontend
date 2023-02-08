<script>
    
    
    
</script>
<template>
    <main>
      <h2>Create Resume</h2>
      <form>
        <table>
            <tr>
                <td><h4>Personal Information</h4></td>
            </tr>
            <tr>
                <td>
                    <label for="full-name">Full Name:</label>
                </td>
                <td>
                    <input type="text" id="full-name" name="full-name" required><br><br>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="email">Email:</label>
                </td>
                <td>
                    <input type="email" id="email" name="email" required><br><br>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="phone">Phone:</label>
                </td>
                <td>
                    <input type="tel" id="phone" name="phone" required><br><br>
                </td>
            </tr>
            <tr>
                <td><h4>Education</h4></td>
            </tr>
            <tr>
                <td>
                    <label for="degree">Degree:</label>
                </td>
                <td>
                    <input type="text" id="degree" name="degree" required><br><br>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="university">Institution:</label>
                </td>
                <td>
                    <input type="text" id="university" name="university" required><br><br>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="graduation-year">Graduation Year:</label>
                </td>
                <td>
                    <input type="number" id="graduation-year" name="graduation-year" required><br><br>
                </td>
            </tr>
            <tr>
                <td>
                    <button @click="handleStore.setAddEducation" type="button">Add Education</button>
                </td>
            </tr>
            <!-- <tr v-if="handleStore.addEducation"> -->
                <tr>
                    <td>
                        <label for="university">Institution:</label>
                    </td>
                    <td>
                        <input type="text" id="university" name="university" required><br><br>
                    </td>
                <!-- </tr> -->
                <!-- <tr v-if="handleStore.addEducation"> -->
                    <td>
                        <label for="graduation-year">Graduation Year:</label>
                    </td>
                    <td>
                        <input type="number" id="graduation-year" name="graduation-year" required><br><br>
                    </td>
                <!-- </tr> -->
            </tr>
            <tr>
                <td><h4>Work Experience</h4></td>
            </tr>
            <tr>
                <td>
                    <label for="company">Company:</label>
                </td>
                <td>
                    <input type="text" id="company" name="company" required><br><br>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="position">Position:</label>
                </td>
                <td>
                    <input type="text" id="position" name="position" required><br><br>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="start-date">Start Date:</label>
                </td>
                <td>
                    <input type="date" id="start-date" name="start-date" required><br><br>
                </td>
            </tr>                    
            <tr>
                <td>
                    <label for="end-date">End Date:</label>
                </td>
                <td>
                    <input type="date" id="end-date" name="end-date" required><br><br>
                </td>
            </tr>
            <tr>
                <td><h4>Skills</h4></td>
            </tr>
            <tr>
                <td>
                    <label for="skills">Skills:</label>
                </td>
                <td>
                    <textarea id="skills" name="skills" required></textarea><br><br>
                </td>
                <tr>
                    <td></td>
                    <td>
                        <input type="submit" value="Submit">
                    </td>
                </tr>
            </tr>
        </table>
      </form>
    </main>
  </template>
  
  <style scoped>
  main{
    padding: 2rem 4rem;
    height: auto;
    padding-bottom: 5rem;
  }
  input{
    background: none;
    color: #ddd;
    padding: 0.5rem 1rem;
    box-sizing: content-box;
    border-radius: 0.6rem;
    font-size: 1.2rem
  }
  input[type="submit"]{
   float: right;
   font-size: 1rem;
  }
  h4{
    margin-top: 2rem
  }
  </style>
  