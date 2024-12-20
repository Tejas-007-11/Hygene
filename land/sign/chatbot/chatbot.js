// DOM Elements
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatBody = document.getElementById('chat-body');
const typingIndicator = document.getElementById('typing-indicator');
const voiceBtn = document.getElementById('voice-btn');

// Predefined healthcare responses with keywords
const healthcareResponses = {
  "diabetes": "Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high. It affects the body's ability to produce or use insulin.",
  "hypertension": "Hypertension, also known as high blood pressure, is a condition where the force of the blood against the artery walls is too high.",
  "heart disease": "To prevent heart disease, maintain a healthy diet, exercise regularly, avoid smoking, and manage stress.",
  "covid-19 symptoms": "Common symptoms of COVID-19 include fever, dry cough, fatigue, and loss of taste or smell. If you have any of these symptoms, consult a doctor immediately.",
  "mental health": "Mental health refers to emotional, psychological, and social well-being. It affects how we think, feel, and act. Taking care of your mental health is important for overall wellness.",
  "immunity": "To improve immunity, eat a balanced diet, get regular exercise, get enough sleep, reduce stress, and avoid smoking and excessive alcohol consumption.",
  "vaccines": "Vaccines are biological preparations that provide immunity to specific diseases. They work by stimulating the body's immune system to recognize and fight off pathogens.",
  "cancer": "Cancer is a group of diseases characterized by the uncontrolled division of abnormal cells in the body. Treatment depends on the type of cancer and its stage.",
  "asthma": "Asthma is a condition in which your airways narrow and swell, making it difficult to breathe. Symptoms include wheezing, coughing, and shortness of breath.",
  "obesity": "Obesity is a condition characterized by excessive body fat, which increases the risk of many diseases like heart disease, diabetes, and certain cancers.",
  "cholesterol": "Cholesterol is a type of fat found in your blood. High levels of LDL (bad) cholesterol can increase your risk of heart disease and stroke.",
  "stroke": "A stroke occurs when there is a sudden interruption in the blood supply to the brain, either from a blockage or a rupture in the blood vessels.",
  "flu": "Influenza (flu) is a viral infection that affects the respiratory system. Symptoms include fever, chills, sore throat, body aches, and fatigue.",
  "pneumonia": "Pneumonia is an infection in one or both lungs, causing symptoms like cough, fever, shortness of breath, and chest pain.",
  "insomnia": "Insomnia is a sleep disorder where you have difficulty falling asleep or staying asleep, often leading to daytime fatigue and mood disturbances.",
  "anxiety": "Anxiety is a mental health condition characterized by persistent worry, fear, and nervousness that can interfere with daily life.",
  "depression": "Depression is a mood disorder that causes persistent feelings of sadness, loss of interest, and difficulty performing everyday activities.",
  "arthritis": "Arthritis is inflammation of the joints, causing pain, stiffness, and swelling. It can affect one or multiple joints.",
  "osteoporosis": "Osteoporosis is a condition that weakens bones, making them more fragile and susceptible to fractures. It commonly affects older adults.",
  "gout": "Gout is a form of arthritis caused by high levels of uric acid in the blood, leading to sudden and severe joint pain.",
  "eczema": "Eczema is a condition that causes itchy, inflamed skin. It can be triggered by allergens, irritants, or stress.",
  "psoriasis": "Psoriasis is a chronic autoimmune condition that results in the rapid growth of skin cells, leading to thick, scaly patches on the skin.",
  "addison's disease": "Addison's disease is a disorder where the adrenal glands do not produce enough hormones, leading to symptoms like fatigue, weight loss, and low blood pressure.",
  "hypothyroidism": "Hypothyroidism is a condition where the thyroid gland doesn't produce enough thyroid hormones, leading to symptoms like fatigue, weight gain, and depression.",
  "hyperthyroidism": "Hyperthyroidism is a condition where the thyroid gland produces too much thyroid hormone, leading to symptoms like weight loss, rapid heartbeat, and anxiety.",
  "anemia": "Anemia is a condition where you lack enough healthy red blood cells to carry adequate oxygen to your body's tissues, causing fatigue and weakness.",
  "vitamin D deficiency": "Vitamin D deficiency can lead to weakened bones, fatigue, and an increased risk of infections.",
  "pregnancy": "Pregnancy is the period in which a woman carries a developing fetus within her womb, typically lasting around 40 weeks.",
  "menopause": "Menopause is the natural biological process that marks the end of a woman's menstrual cycles, typically occurring between the ages of 45 and 55.",
  "infertility": "Infertility is the inability to conceive a child after one year of regular, unprotected sex. It can affect both men and women.",
  "STDs": "Sexually transmitted diseases (STDs) are infections transmitted through sexual contact. Examples include chlamydia, gonorrhea, and syphilis.",
  "HIV/AIDS": "HIV (Human Immunodeficiency Virus) weakens the immune system, and if left untreated, can develop into AIDS (Acquired Immunodeficiency Syndrome).",
  "menstrual cycle": "The menstrual cycle is a monthly process in which the female reproductive system prepares for pregnancy. It includes ovulation and menstruation.",
  "prostate cancer": "Prostate cancer is a type of cancer that affects the prostate gland in men. It often develops slowly and may not cause symptoms in the early stages.",
  "breast cancer": "Breast cancer is a cancer that originates in the cells of the breast. It can affect both men and women, though it is more common in women.",
  "skin cancer": "Skin cancer is the abnormal growth of skin cells, often caused by exposure to ultraviolet (UV) radiation from the sun.",
  "liver disease": "Liver disease refers to any condition that affects the liver, including hepatitis, cirrhosis, and liver cancer.",
  "kidney disease": "Kidney disease is a condition where the kidneys are damaged and cannot filter blood effectively. This can lead to kidney failure if untreated.",
  "fibromyalgia": "Fibromyalgia is a condition characterized by widespread musculoskeletal pain, fatigue, and tenderness in specific areas of the body.",
  "cystic fibrosis": "Cystic fibrosis is a genetic disorder that affects the lungs, digestive system, and other organs, causing thick mucus buildup and difficulty breathing.",
  "autism spectrum disorder": "Autism spectrum disorder is a developmental disorder characterized by difficulties in social interaction, communication, and repetitive behaviors.",
  "schizophrenia": "Schizophrenia is a serious mental health disorder that affects how a person thinks, feels, and behaves. Symptoms may include hallucinations and delusions.",
  "bipolar disorder": "Bipolar disorder is a mental health condition characterized by extreme mood swings, including episodes of mania and depression.",
  "stress": "Stress is a natural physical and mental response to life experiences. Stress can be acute or chronic and can affect overall health if not managed.",
  "heart attack": "A heart attack occurs when a part of the heart muscle is damaged due to blocked blood flow, often causing chest pain, shortness of breath, and fatigue.",
  "carpal tunnel syndrome": "Carpal tunnel syndrome is a condition caused by pressure on the median nerve in the wrist, leading to pain, numbness, and tingling in the hand.",
  "stroke prevention": "To prevent stroke, manage risk factors such as high blood pressure, diabetes, and high cholesterol, and avoid smoking and excessive alcohol consumption.",
  "headache": "Headaches are common conditions that cause pain or discomfort in the head, neck, or scalp. They can be caused by stress, dehydration, or medical conditions.",
  "migraines": "Migraines are severe headaches that often come with nausea, vomiting, and sensitivity to light or sound.",
  "allergies": "Allergies occur when the immune system reacts to harmless substances like pollen, dust, or certain foods. Symptoms can include sneezing, itching, and swelling.",
  "food allergies": "Food allergies occur when the immune system mistakenly identifies certain foods as harmful, triggering symptoms such as swelling, hives, or anaphylaxis.",
  "pediatric care": "Pediatric care involves the medical care of infants, children, and adolescents, addressing their unique health needs as they grow and develop.",
  "geriatrics": "Geriatrics is the branch of medicine that focuses on the health care of elderly people, addressing age-related diseases and conditions.",
  "spinal cord injury": "Spinal cord injury is damage to the spinal cord that can result in partial or total loss of movement and sensation below the injury site.",
  "brain injury": "Brain injury can occur from trauma, stroke, or disease and can affect brain function, leading to changes in behavior, cognition, and motor skills.",
  "dementia": "Dementia is a group of symptoms affecting memory, thinking, and social abilities, often associated with Alzheimer's disease.",
  "Alzheimer's disease": "Alzheimer's disease is a progressive neurodegenerative disorder that leads to memory loss, confusion, and changes in behavior.",
  "Parkinson's disease": "Parkinson's disease is a neurodegenerative disorder that affects movement, causing tremors, stiffness, and difficulty with balance and coordination.",
  "multiple sclerosis": "Multiple sclerosis is an autoimmune disease that affects the central nervous system, leading to symptoms like fatigue, numbness, and difficulty walking.",
  "hiv prevention": "HIV prevention includes using condoms, taking pre-exposure prophylaxis (PrEP), and avoiding sharing needles to reduce the risk of HIV transmission.",
  "sleep apnea": "Sleep apnea is a disorder where breathing repeatedly stops and starts during sleep, leading to poor sleep quality and daytime fatigue.",
  "sleep hygiene": "Sleep hygiene refers to practices and habits that promote regular, restful sleep, such as maintaining a consistent sleep schedule and avoiding caffeine before bed.",
  "nutrition": "Nutrition is the process of providing the body with the necessary nutrients for growth, repair, and energy. A balanced diet is key to good health.",
  "exercise": "Exercise is physical activity that helps maintain or improve health and fitness. It has numerous benefits, including weight management, cardiovascular health, and mental well-being.",
  "hydration": "Hydration is the process of maintaining adequate fluid balance in the body. Drinking enough water is crucial for digestion, energy, and overall health.",
  "gut health": "Gut health refers to the balance of bacteria and other organisms in the digestive system, which plays a crucial role in overall health and immune function.",
  "detox": "Detox refers to the process of removing toxins from the body, typically through diet, exercise, and other health practices.",
  "yoga": "Yoga is a physical, mental, and spiritual practice that combines breath control, meditation, and movement to enhance physical and mental well-being.",
  "meditation": "Meditation is a mental practice that involves focusing the mind to achieve a state of calm and relaxation, often used to reduce stress and anxiety.",
  "mindfulness": "Mindfulness is the practice of being fully present in the moment and aware of your thoughts and feelings without judgment.",
  "acupuncture": "Acupuncture is a traditional Chinese medicine practice that involves inserting thin needles into specific points on the body to relieve pain and improve health.",
  "chiropractic care": "Chiropractic care focuses on diagnosing and treating mechanical disorders of the musculoskeletal system, particularly the spine.",
  "massage therapy": "Massage therapy involves manipulating the soft tissues of the body to relieve pain, reduce stress, and improve circulation.",
  "alternative medicine": "Alternative medicine refers to non-traditional medical practices, such as herbal remedies, acupuncture, and homeopathy, that are used alongside or instead of conventional medicine.",
  "holistic health": "Holistic health is an approach that considers the whole person—body, mind, and spirit—in maintaining and improving health.",
  "asthma": "Asthma is a chronic respiratory condition that causes the airways to become inflamed and narrow, making it difficult to breathe. Symptoms include wheezing, coughing, and shortness of breath.",
    "arthritis": "Arthritis is an inflammation of the joints that causes pain, stiffness, and swelling. It can affect one or more joints and may become worse with age.",
    "stroke": "A stroke occurs when the blood supply to part of the brain is interrupted, causing brain cells to die. Symptoms include sudden numbness, confusion, difficulty speaking, and loss of coordination.",
    "cholesterol": "Cholesterol is a fatty substance found in the blood. High levels of cholesterol can increase the risk of heart disease and stroke. A healthy diet and exercise can help manage cholesterol levels.",
    "allergies": "Allergies are immune system reactions to substances like pollen, dust, or pet dander. Symptoms may include sneezing, itching, and swelling.",
    "anemia": "Anemia is a condition where you don't have enough red blood cells to carry adequate oxygen to your body's tissues. Symptoms include fatigue, weakness, and pale skin.",
    "kidney disease": "Kidney disease refers to conditions that impair the function of your kidneys. Symptoms include swelling, fatigue, and changes in urination. Early detection can help slow progression.",
    "obesity": "Obesity is a condition characterized by excessive body fat that increases the risk of diseases like heart disease, diabetes, and hypertension.",
    "depression": "Depression is a mental health disorder that causes persistent feelings of sadness, hopelessness, and loss of interest in activities. It can affect daily functioning and may require professional treatment.",
    "anxiety": "Anxiety is a feeling of worry, fear, or unease. It can be triggered by stress or certain situations and may lead to physical symptoms such as rapid heartbeat and dizziness.",
    "dementia": "Dementia is a group of symptoms affecting memory, thinking, and social abilities severely enough to interfere with daily life. Alzheimer's disease is the most common type.",
    "sepsis": "Sepsis is a life-threatening condition caused by an infection that spreads throughout the body, leading to widespread inflammation and organ failure. Immediate medical attention is required.",
    "pneumonia": "Pneumonia is an infection in the lungs that can cause symptoms like cough, fever, shortness of breath, and chest pain. It can be caused by bacteria, viruses, or fungi.",
    "vitamin D deficiency": "Vitamin D deficiency can cause bone pain, muscle weakness, and an increased risk of fractures. It can be managed through supplements or exposure to sunlight.",
    "liver disease": "Liver disease refers to any condition that impairs the function of the liver. Symptoms can include jaundice, fatigue, and abdominal pain.",
    "flu": "The flu, or influenza, is a contagious respiratory illness caused by influenza viruses. Symptoms include fever, cough, sore throat, and body aches.",
    "menopause": "Menopause is the time in a woman's life when menstrual periods cease permanently, usually occurring between ages 45 and 55. It may be accompanied by symptoms like hot flashes and mood changes.",
    "gout": "Gout is a form of arthritis that occurs when uric acid builds up in the body, leading to sudden, severe pain, usually in the big toe.",
    "sleep apnea": "Sleep apnea is a disorder in which breathing repeatedly stops and starts during sleep, leading to poor quality sleep and fatigue during the day.",
    "cystic fibrosis": "Cystic fibrosis is a genetic disorder that affects the lungs and digestive system. It leads to thick mucus buildup, causing breathing problems and digestive issues.",
    "hepatitis": "Hepatitis refers to inflammation of the liver, often caused by a viral infection. There are different types of hepatitis, including Hepatitis A, B, and C.",
    "eczema": "Eczema is a skin condition characterized by itchy, inflamed, and dry patches of skin. It is often triggered by allergens or irritants.",
    "premenstrual syndrome (PMS)": "PMS refers to a variety of symptoms that occur before menstruation, including mood swings, fatigue, and physical discomfort like bloating and headaches.",
    "sickle cell anemia": "Sickle cell anemia is a genetic blood disorder that causes red blood cells to become misshapen, leading to blockages in blood flow, pain, and potential organ damage.",
    "multiple sclerosis": "Multiple sclerosis (MS) is a disease of the central nervous system where the immune system attacks the protective covering of nerve fibers, leading to a variety of neurological symptoms.",
    "Parkinson's disease": "Parkinson's disease is a progressive neurological disorder that affects movement, causing tremors, stiffness, and difficulty with balance and coordination.",
    "HIV": "Human Immunodeficiency Virus (HIV) is a virus that attacks the body's immune system, weakening it over time. If untreated, it can lead to AIDS (Acquired Immunodeficiency Syndrome).",
    "hearing loss": "Hearing loss can result from aging, noise exposure, or medical conditions. It can range from mild to severe and may require hearing aids or other treatments.",
    "prostate cancer": "Prostate cancer affects the prostate gland in men. Symptoms may include difficulty urinating and pelvic pain. Early detection and treatment are crucial.",
    "pregnancy": "Pregnancy is the period during which a woman carries a developing fetus. It lasts approximately 40 weeks, from conception to childbirth, and is divided into three trimesters.",
    "testicular cancer": "Testicular cancer is a cancer that starts in the testicles. It is rare but treatable, especially if caught early. Symptoms may include swelling or pain in the testicle.",
    "tuberculosis": "Tuberculosis (TB) is a bacterial infection that primarily affects the lungs but can also affect other parts of the body. Symptoms include cough, chest pain, and weight loss.",
    "cholera": "Cholera is a bacterial infection that causes severe diarrhea and dehydration. It is typically spread through contaminated water or food and requires immediate treatment.",
    "malaria": "Malaria is a mosquito-borne disease caused by a parasite. Symptoms include fever, chills, and flu-like illness. It can be fatal if untreated.",
    "dengue fever": "Dengue fever is a viral illness spread by mosquitoes. Symptoms include high fever, severe headache, pain behind the eyes, and joint pain.",
    "tetanus": "Tetanus is a bacterial infection that affects the nervous system and can cause muscle stiffness and spasms. It is often contracted through a wound contaminated with dirt.",
    "zika virus": "Zika virus is a mosquito-borne virus that can cause fever, rash, and joint pain. It is also linked to birth defects in babies born to infected mothers.",
    "rabies": "Rabies is a viral disease that affects the nervous system and can be fatal. It is usually transmitted through the bite of an infected animal.",
    "shingles": "Shingles is a reactivation of the varicella-zoster virus (the same virus that causes chickenpox) that leads to a painful rash, typically on one side of the body.",
    "skin cancer": "Skin cancer is the abnormal growth of skin cells. It can occur in areas exposed to the sun and may appear as new growths or changes in existing moles.",
    "Hepatitis B": "Hepatitis B is a viral infection that affects the liver. It can be transmitted through blood, sexual contact, and from mother to child during childbirth.",
    "Hepatitis C": "Hepatitis C is a viral infection that primarily affects the liver and can lead to chronic liver disease. It is transmitted through blood-to-blood contact.",
    "mental wellness": "Mental wellness refers to maintaining a positive state of mental health, involving self-care practices, stress management, and seeking support when needed.",
    "acne": "Acne is a common skin condition that causes pimples, blackheads, and cysts. It is often triggered by hormonal changes, stress, or poor skincare habits.",
    "lupus": "Lupus is an autoimmune disease where the immune system attacks healthy cells and tissues, causing inflammation and damage to organs like the skin, kidneys, and heart.",
    "cervical cancer": "Cervical cancer occurs in the cervix and is often caused by the human papillomavirus (HPV). Early screening through Pap tests can help detect it before symptoms appear.",
    "breast cancer": "Breast cancer is cancer that begins in the cells of the breasts. Symptoms include lumps in the breast, changes in breast shape, or discharge from the nipple.",
    "testicular cancer": "Testicular cancer is cancer that originates in the testicles. Symptoms include swelling or lumps in the testicles. Early detection is key for successful treatment.",
    "stroke rehabilitation": "Stroke rehabilitation is a vital part of recovery after a stroke. It may involve physical therapy, speech therapy, and other treatments to help regain lost functions.",
    "stomach ulcers": "Stomach ulcers are open sores that develop on the inner lining of the stomach. They can cause pain, nausea, and indigestion.",
    "hemorrhoids": "Hemorrhoids are swollen veins in the lower part of the rectum and anus. Symptoms include pain, itching, and bleeding during bowel movements.",
    "sunstroke": "Sunstroke is a heat-related illness that occurs when the body overheats due to prolonged exposure to the sun. Symptoms include dizziness, confusion, and rapid heartbeat.",
    "constipation": "Constipation is a condition where bowel movements are infrequent or difficult to pass. It can be caused by poor diet, dehydration, or lack of physical activity.",
    "diarrhea": "Diarrhea is a condition characterized by frequent, loose, or watery stools. It can be caused by infections, food intolerance, or stress.",
    "heart attack": "A heart attack occurs when blood flow to a part of the heart is blocked, causing damage to the heart muscle. Symptoms include chest pain, shortness of breath, and sweating.",
    "high blood pressure": "High blood pressure, or hypertension, is a condition where the force of the blood against the artery walls is consistently too high, increasing the risk of heart disease and stroke.",
    "mental illness": "Mental illness refers to a wide range of conditions that affect mood, thinking, and behavior. It can range from anxiety and depression to more serious conditions like schizophrenia.",
    "kidney stones": "Kidney stones are small, hard deposits that form in the kidneys. They can cause severe pain, particularly when passing through the urinary tract.",
    "obesity treatment": "Obesity treatment typically includes a combination of diet, exercise, and sometimes medication or surgery. It aims to achieve and maintain a healthy weight and reduce health risks.",
    "insomnia": "Insomnia is the inability to fall asleep or stay asleep, leading to daytime fatigue. It can be caused by stress, anxiety, or medical conditions.",
    "allergic rhinitis": "Allergic rhinitis, or hay fever, is an allergic reaction to airborne particles like pollen. Symptoms include sneezing, runny nose, and itchy eyes.",
    "severe allergies": "Severe allergies can cause anaphylaxis, a life-threatening reaction that requires immediate medical attention. Common allergens include nuts, shellfish, and bee stings.",
    "cyst": "A cyst is a closed sac-like structure filled with liquid or semi-solid material. Cysts can form anywhere in the body and may or may not cause symptoms.",
    "dehydration": "Dehydration occurs when your body loses more fluids than it takes in, leading to symptoms like dry mouth, fatigue, and dizziness. Drinking fluids is key to prevention.",
    "spinal cord injury": "A spinal cord injury is damage to the spinal cord that can result in loss of movement or sensation. Treatment often involves rehabilitation to improve function and quality of life.",
    "bipolar disorder": "Bipolar disorder is a mental health condition that causes extreme mood swings, including emotional highs (mania) and lows (depression).",
    "schizophrenia": "Schizophrenia is a severe mental disorder that affects thinking, feeling, and behavior. Symptoms may include hallucinations, delusions, and disorganized thinking.",
    "cognitive impairment": "Cognitive impairment refers to difficulties with memory, learning, or concentration. It can be a result of aging, brain injury, or neurological disorders.",
    "cervical spondylosis": "Cervical spondylosis is the age-related wear and tear of the bones, discs, and joints in the neck. It can cause pain, stiffness, and in some cases, numbness or weakness.",
    "back pain": "Back pain is one of the most common medical problems. It can be caused by muscle strain, poor posture, or underlying medical conditions like herniated discs.",
    "cold sores": "Cold sores are fluid-filled blisters caused by the herpes simplex virus. They typically appear on the lips and can be triggered by stress or illness.",
    "liver cirrhosis": "Liver cirrhosis is scarring of the liver caused by long-term liver damage. It can lead to liver failure, requiring medical intervention.",
    "food poisoning": "Food poisoning is an illness caused by consuming contaminated food or water. Symptoms include nausea, vomiting, and diarrhea.",
    "hives": "Hives are raised, red, itchy welts on the skin, often triggered by allergic reactions, stress, or infections.",
    "thyroid disease": "Thyroid disease refers to disorders that affect the thyroid gland, which regulates metabolism. It can cause symptoms like fatigue, weight changes, and mood swings.",
    "heart failure": "Heart failure occurs when the heart is unable to pump blood efficiently, leading to symptoms like shortness of breath, fatigue, and fluid retention.",
    "ulcerative colitis": "Ulcerative colitis is a chronic condition that causes inflammation and sores in the colon, leading to symptoms like abdominal pain and diarrhea.",
    "crohn's disease": "Crohn's disease is an inflammatory bowel disease that can cause pain, fatigue, weight loss, and diarrhea. It may require medications or surgery to manage.",
    "vitamin B12 deficiency": "Vitamin B12 deficiency can lead to fatigue, weakness, and nerve problems. It is common in people with dietary restrictions or absorption issues.",
    "cold and flu": "Cold and flu are respiratory illnesses caused by viruses. Symptoms of the common cold include a runny nose and cough, while the flu typically involves fever and body aches.",
    "insulin resistance": "Insulin resistance is a condition where the body's cells don't respond properly to insulin, often leading to high blood sugar levels and an increased risk of diabetes.",
    "whiplash": "Whiplash is a neck injury caused by sudden jerking motion, often during a car accident. Symptoms include neck pain, stiffness, and headaches.",
    "pediatric care": "Pediatric care refers to healthcare services for infants, children, and adolescents. It includes routine checkups, vaccinations, and treatment of childhood illnesses.",
    "severe burns": "Severe burns are injuries that damage the skin and underlying tissue. They require immediate medical attention and may need treatments like skin grafts.",
    "nosebleeds": "Nosebleeds are common and can be caused by dry air, allergies, or injury. They typically stop on their own but may require treatment for frequent occurrences.",
    "vitamin A deficiency": "Vitamin A deficiency can cause dry skin, poor vision, and immune system weakness. It can be managed by consuming foods rich in vitamin A, like carrots and leafy greens.",
    "bone fractures": "Bone fractures occur when a bone breaks due to injury or stress. Symptoms include pain, swelling, and difficulty moving the affected area.",
    "appendicitis": "Appendicitis is inflammation of the appendix, which causes abdominal pain and requires surgical removal of the appendix.",
    "kidney failure": "Kidney failure occurs when the kidneys lose their ability to filter waste and excess fluids from the body. It may require dialysis or a kidney transplant.",
    "throat infection": "A throat infection can be caused by bacteria or viruses, leading to symptoms like sore throat, difficulty swallowing, and fever.",
    "hernia": "A hernia occurs when an internal organ or tissue bulges through a weak spot in the abdominal muscles. Surgery may be required for treatment.",
    "carpal tunnel syndrome": "Carpal tunnel syndrome is a condition caused by pressure on the median nerve in the wrist, leading to symptoms like pain, numbness, and tingling in the hand.",
    "eating disorder": "Eating disorders, such as anorexia and bulimia, involve unhealthy eating habits and can have serious physical and mental health consequences.",
    "pregnancy complications": "Pregnancy complications refer to conditions that arise during pregnancy, including gestational diabetes, high blood pressure, or preterm labor.",
    "colorectal cancer": "Colorectal cancer affects the colon or rectum. Symptoms include blood in the stool, changes in bowel habits, and unexplained weight loss.",
    "sore throat": "A sore throat is a common condition that can be caused by infections like the cold or flu. Symptoms include pain, scratchiness, or irritation in the throat.",
    "high blood sugar": "High blood sugar, or hyperglycemia, can be caused by diabetes or stress. It may lead to symptoms like frequent urination, excessive thirst, and blurred vision.",
    "low blood sugar": "Low blood sugar, or hypoglycemia, can cause dizziness, confusion, sweating, and fainting. It often requires immediate treatment with sugar or glucose tablets.",
    "cervical cancer": "Cervical cancer is cancer that occurs in the cervix, often caused by the human papillomavirus (HPV). Regular screening helps detect it early."
};



function addMessage(content, isBot = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = isBot ? 'bot-message' : 'user-message';
    messageDiv.textContent = content;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}


async function handleUserInput() {
    const message = userInput.value.trim().toLowerCase(); 
    if (!message) return;

   
    addMessage(userInput.value, false);

   
    userInput.value = '';

    
    typingIndicator.style.display = 'flex';

    setTimeout(() => {
        // Hide typing indicator
        typingIndicator.style.display = 'none';

        
        let botResponse = "I'm sorry, I don't have information on that. Please ask about a healthcare-related topic.";

       
        for (let keyword in healthcareResponses) {
            if (message.includes(keyword)) {
                botResponse = healthcareResponses[keyword];
                break; 
            }
        }

        addMessage(botResponse, true);
    }, 1000); 
}
function startVoiceRecognition() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.start();

  recognition.onresult = function(event) {
      const transcript = event.results[0][0].transcript;
      userInput.value = transcript;
      handleUserInput();
  };

  recognition.onerror = function(event) {
      console.error('Speech recognition error:', event.error);
      addMessage("Sorry, I couldn't understand. Please try again.", true);
  };

  recognition.onspeechend = function() {
      recognition.stop();
  };
}


sendBtn.addEventListener('click', handleUserInput);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleUserInput();
    }
});

voiceBtn.addEventListener('click', startVoiceRecognition);



document.addEventListener('DOMContentLoaded', () => {
    addMessage("Hello! I'm your healthcare assistant. How can I help you today? You can ask about various health topics.", true);
});

