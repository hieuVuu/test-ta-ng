const model = {};
model.login = async ({ email, password }) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    } catch (err) {
       console.log(err);
       alert(err.message);
    }
 }