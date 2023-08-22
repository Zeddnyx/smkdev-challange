const udinHeight = 180;
const udinWeight = 90;

const nanaHeight = 140;
const nanaWeight = 47;

const hitungBMI = (udin = "udin", nanang = "nanang") => {
  const bmiUdin = udinWeight / (udinHeight / 100) ** 2;
  const bmiNanang = nanaWeight / (nanaHeight / 100) ** 2;

  const udinResult = bmiUdin.toFixed(2);
  const nanangResult = bmiNanang.toFixed(2);

  if (bmiUdin > bmiNanang) {
    return `BMI ${udin} (${udinResult}) lebih tinggi dari ${nanang} (${nanangResult})`;
  } else if (bmiUdin < bmiNanang) {
    return `BMI ${nanang} (${nanangResult}) lebih tinggi dari ${udin} (${udinResult})`;
  } else {
    return `BMI ${udin} dan ${nanang} sama`;
  }
};

console.log(hitungBMI());
