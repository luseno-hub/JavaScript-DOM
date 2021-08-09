function pageLoaded() {
  console.log("Here are the rectangle IDs");

  const rectangleDivs = document.querySelectorAll(".fav-colors");
  const iDsArray = [...rectangleDivs];

  // using the forEach loop;
  iDsArray.forEach((iD) => {
    console.log(iD.id);
  });
}
