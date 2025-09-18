function analyzeReview() {
 const reviewText = document.getElementById('reviewText').value.trim();
 if (!reviewText) {
 alert('Please enter a review to analyze.');
 return;
 }
 document.getElementById('loadingIndicator').style.display = 'block';
 document.getElementById('resultCard').style.display = 'none';
 setTimeout(function() {
 document.getElementById('loadingIndicator').style.display = 'none';
 const isFake = detectFakeReview(reviewText);
 const score = isFake ? Math.floor(Math.random() * 30) + 10 : 
Math.floor(Math.random() * 30) + 60;
 updateResultCard(reviewText, score);
 document.getElementById('resultCard').style.display = 'block';
 }, 2000);
}
function updateResultCard(reviewText, score) {
 const authenticityBar = document.getElementById('authenticityBar');
 authenticityBar.style.width = score + '%';
 if (score < 40) {
 authenticityBar.className = 'progress-bar bg-danger';
 document.getElementById('resultBadge').className = 'badge rounded-pill bg-danger';
 document.getElementById('resultBadge').textContent = 'Likely Fake';
 } else if (score < 60) {
 authenticityBar.className = 'progress-bar bg-warning';
 document.getElementById('resultBadge').className = 'badge rounded-pill bg-warning';
 document.getElementById('resultBadge').textContent = 'Suspicious';
 } else {
 authenticityBar.className = 'progress-bar bg-success';
 document.getElementById('resultBadge').className = 'badge rounded-pill bg-success';
 document.getElementById('resultBadge').textContent = 'Likely Genuine';
 }
 document.getElementById('analyzedReview').textContent = reviewText;

 const rating = document.getElementById('reviewRating').value || 5;
 let stars = '';
 for (let i = 0; i < rating; i++) stars += '★';
 for (let i = rating; i < 5; i++) stars += '☆';
 document.getElementById('reviewStars').textContent = stars;
 const today = new Date();
 document.getElementById('reviewDate').textContent = today.toLocaleDateString();
 updateAnalysisFactors(reviewText, score);
 updateAIRecommendation(score);
}
