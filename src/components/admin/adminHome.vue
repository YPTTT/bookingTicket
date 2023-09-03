.<template>
  <div class="container">
    <nav></nav>
    <div class="sub-container">
        <header>
          <div class="profile">
            <p>Pham thi thu thuy</p>
            <img src="../../assets/avt-profile.jpg" class="avt-profile">
          </div>
      </header>
      <section></section>
      <footer></footer>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container
{
  width: 100%;
  height: 100vh;
  display: flex;
}

.sub-container
{
  width: 85%;
  height: 100vh;
}

header
{
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

nav
{
  background: black;
  width: 15%;
  height: 100vh;
}

section
{
  width: 100%;
  height: 80vh;
  background: orange;
}

footer
{
  width: 100%;
  height: 10vh;
  background: purple;
}

.profile
{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

.profile p
{
  margin-top: 0.5rem;
}

.profile .avt-profile
{
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  vertical-align: middle;
}
</style>