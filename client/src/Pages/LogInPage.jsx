function LoginPage() {
  return (
    <>
      <h1>LOG IN TO YOUR ACCOUNT</h1>
      <label htmlFor="email">YOUR EMAIL</label>
      <input name="email" id="email" type="email" value={""} />
    </>
  );
}

export default LoginPage;
