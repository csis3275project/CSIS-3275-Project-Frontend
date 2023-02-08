<template>
  <main>
    <h2>Sign Up</h2>
    <form>
      <table>
        <tr>
          <td>
            <label for="first-name">First Name:</label>
          </td>
          <td>
            <input type="text" id="first-name" name="first-name"><br><br>
          </td>
        </tr>
        <tr>
          <td>
            <label for="last-name">Last Name:</label>
          </td>
          <td>
            <input type="text" id="last-name" name="last-name"><br><br>
          </td>
          </tr>
          <tr>
            <td>
              <label for="email">Email:</label>
            </td>
            <td>
              <input type="email" id="email" name="email"><br><br>
            </td>
          </tr>
          <tr>
            <td>
              <label for="password">Password:</label>
            </td>
            <td>
              <input type="password" id="password" name="password"><br><br>
            </td>
          </tr>
          <tr>
            <td>
              <label for="confirm-password">Confirm Password:</label>
            </td>
            <td>
              <input type="password" id="confirm-password" name="confirm-password"><br><br>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="submit" value="SIGN UP">
            </td>
          </tr>
      </table>
    </form>
  </main>
</template>

<style scoped>
main{
  padding: 2rem 4rem;
  height: 100vh;
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
</style>
