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
    "cervical cancer": "Cervical cancer is cancer that occurs in the cervix, often caused by the human papillomavirus (HPV). Regular screening helps detect it early.",
    "alprazolam": "Alprazolam is used to treat anxiety and panic disorders. The typical dosage is 0.25mg to 0.5mg 3 times daily.",
    "clonidine": "Clonidine is used to treat high blood pressure and ADHD. The typical dosage is 0.1mg to 0.3mg twice daily.",
    "fexofenadine": "Fexofenadine is an antihistamine used to relieve allergy symptoms. The typical dosage is 60mg twice daily or 180mg once daily.",
    "hydrocortisone": "Hydrocortisone is a corticosteroid used to treat inflammation. The typical dosage is 20mg to 240mg daily, depending on the condition.",
    "metoclopramide": "Metoclopramide is used to treat nausea, vomiting, and gastroparesis. The typical dosage is 10mg to 15mg 3-4 times daily.",
    "trazodone": "Trazodone is used to treat depression and insomnia. The typical dosage is 150mg to 400mg daily.",
    "sulfasalazine": "Sulfasalazine is used to treat inflammatory bowel diseases like ulcerative colitis and rheumatoid arthritis. The typical dosage is 500mg to 1000mg twice daily.",
    "vardenafil": "Vardenafil is used to treat erectile dysfunction. The typical dosage is 5mg to 20mg taken 60 minutes before sexual activity.",
    "methadone": "Methadone is used to treat opioid addiction and manage severe pain. The typical dosage is 5mg to 10mg every 8 to 12 hours.",
    "ranitidine": "Ranitidine is used to treat heartburn, ulcers, and GERD. The typical dosage is 150mg twice daily or 300mg once daily.",
    "phenytoin": "Phenytoin is used to prevent seizures. The typical dosage is 100mg to 300mg daily.",
    "valacyclovir": "Valacyclovir is used to treat viral infections like herpes. The typical dosage is 500mg to 1000mg twice daily.",
    "terazosin": "Terazosin is used to treat high blood pressure and benign prostatic hyperplasia (BPH). The typical dosage is 1mg to 5mg once daily.",
    "prednisolone": "Prednisolone is a corticosteroid used to treat inflammation and immune-related conditions. The typical dosage is 5mg to 60mg daily.",
    "dexamethasone": "Dexamethasone is used to treat inflammation and certain cancers. The typical dosage is 0.75mg to 9mg daily.",
    "phenobarbital": "Phenobarbital is used to prevent and treat seizures. The typical dosage is 1mg to 2mg per kg of body weight daily.",
    "biphasic insulin": "Biphasic insulin is used to control blood sugar levels in type 2 diabetes. The typical dosage is 10 units before breakfast and dinner.",
    "lithium": "Lithium is used to treat bipolar disorder. The typical dosage is 600mg to 1200mg daily, divided into 2 or 3 doses.",
    "fluconazole": "Fluconazole is an antifungal medication used to treat fungal infections. The typical dosage is 150mg to 400mg once daily.",
    "amitriptyline": "Amitriptyline is used to treat depression and anxiety. The typical dosage is 25mg to 100mg daily.",
    "mirtazapine": "Mirtazapine is used to treat depression and anxiety. The typical dosage is 15mg to 45mg once daily.",
    "doxylamine": "Doxylamine is an antihistamine used for sleep and allergy relief. The typical dosage is 25mg once before bedtime.",
    "terbinafine": "Terbinafine is used to treat fungal infections like ringworm. The typical dosage is 250mg once daily.",
    "topiramate": "Topiramate is used to treat seizures and migraines. The typical dosage is 50mg to 100mg daily.",
    "triamcinolone": "Triamcinolone is a corticosteroid used to treat inflammation and allergic conditions. The typical dosage is 4mg to 16mg daily.",
    "lansoprazole": "Lansoprazole is used to treat acid reflux, GERD, and ulcers. The typical dosage is 15mg to 30mg daily.",
    "hydroxychloroquine": "Hydroxychloroquine is used to treat malaria and autoimmune diseases like lupus. The typical dosage is 200mg to 400mg daily.",
    "ziprasidone": "Ziprasidone is used to treat schizophrenia and bipolar disorder. The typical dosage is 40mg to 160mg daily.",
    "oxycodone": "Oxycodone is used to treat moderate to severe pain. The typical dosage is 5mg to 15mg every 4-6 hours as needed.",
    "buprenorphine": "Buprenorphine is used to treat opioid addiction and pain. The typical dosage is 2mg to 8mg per day.",
    "gabapentin": "Gabapentin is used to treat nerve pain and seizures. The typical dosage is 300mg to 1200mg daily in divided doses.",
    "sertraline": "Sertraline is used to treat depression, anxiety, and OCD. The typical dosage is 25mg to 200mg daily.",
    "escitalopram": "Escitalopram is used to treat anxiety and depression. The typical dosage is 10mg to 20mg daily.",
    "clomipramine": "Clomipramine is used to treat OCD and depression. The typical dosage is 25mg to 250mg daily.",
    "furosemide": "Furosemide is a diuretic used to treat fluid retention and high blood pressure. The typical dosage is 20mg to 80mg once or twice daily.",
    "azithromycin": "Azithromycin is an antibiotic used to treat bacterial infections. The typical dosage is 250mg to 500mg once daily for 3-5 days.",
    "carvedilol": "Carvedilol is used to treat high blood pressure and heart failure. The typical dosage is 3.125mg to 25mg twice daily.",
    "fentanyl": "Fentanyl is a powerful opioid used to treat severe pain. The typical dosage is 12mcg/hr to 100mcg/hr depending on the patient's condition.",
    "doxycycline": "Doxycycline is an antibiotic used to treat bacterial infections. The typical dosage is 100mg to 200mg daily in divided doses.",
    "docetaxel": "Docetaxel is used to treat various cancers. The dosage depends on the cancer type and patient's condition.",
    "paroxetine": "Paroxetine is used to treat depression, anxiety, and panic disorder. The typical dosage is 20mg to 50mg daily.",
    "lisinopril": "Lisinopril is used to treat high blood pressure and heart failure. The typical dosage is 10mg to 40mg once daily.",
    "topiramate": "Topiramate is used to prevent seizures and migraines. The typical dosage is 25mg to 50mg twice daily.",
    "amoxicillin": "Amoxicillin is an antibiotic used to treat bacterial infections. The typical dosage is 500mg every 8 hours.",
    "hydrochlorothiazide": "Hydrochlorothiazide is a diuretic used to treat high blood pressure and fluid retention. The typical dosage is 12.5mg to 50mg once daily.",
    "pantoprazole": "Pantoprazole is used to treat acid reflux and ulcers. The typical dosage is 40mg once daily.",
    "tramadol": "Tramadol is used for moderate to severe pain. The typical dosage is 50mg to 100mg every 4-6 hours as needed.",
    "enalapril": "Enalapril is used to treat high blood pressure and heart failure. The typical dosage is 5mg to 40mg daily.",
    "dihydroergotamine": "Dihydroergotamine is used to treat migraines. The typical dosage is 1mg to 2mg during a migraine attack.",
    "doxepin": "Doxepin is used to treat depression, anxiety, and insomnia. The typical dosage is 25mg to 100mg daily.",
    "betamethasone": "Betamethasone is a corticosteroid used to treat inflammation and immune disorders. The typical dosage is 0.6mg to 9mg daily.",
    "mebendazole": "Mebendazole is used to treat parasitic worm infections. The typical dosage is 100mg to 200mg twice daily for 3 days.",
    "nitrates": "Nitrates are used to treat chest pain and heart conditions. The typical dosage varies based on the specific nitrate used.",
    "paracetamol": "Paracetamol is used to reduce fever and relieve pain. The typical dosage is 500mg to 1000mg every 6 hours as needed, not exceeding 4g per day.",
    "ibuprofen": "Ibuprofen is used for pain relief, inflammation, and fever. The typical dosage is 200mg to 400mg every 6-8 hours, not exceeding 1200mg per day.",
    "amoxicillin": "Amoxicillin is an antibiotic used for bacterial infections. The usual dosage is 500mg every 8 hours.",
    "ciprofloxacin": "Ciprofloxacin is used to treat bacterial infections. The typical dosage is 500mg twice daily.",
    "cetirizine": "Cetirizine is an antihistamine used for allergies. The typical dosage is 10mg once daily.",
    "levocetirizine": "Levocetirizine is used to relieve allergy symptoms. The typical dosage is 5mg once daily.",
    "loratadine": "Loratadine is an antihistamine used for hay fever and allergy symptoms. The typical dosage is 10mg once daily.",
    "ranitidine": "Ranitidine is used to treat acidity, ulcers, and gastroesophageal reflux disease (GERD). The typical dosage is 150mg twice daily.",
    "omeprazole": "Omeprazole is used to treat acid reflux and ulcers. The typical dosage is 20mg to 40mg once daily.",
    "metformin": "Metformin is used to manage type 2 diabetes by controlling blood sugar levels. The typical dosage is 500mg to 1000mg twice daily.",
    "atorvastatin": "Atorvastatin is used to lower cholesterol levels. The typical dosage is 10mg to 80mg once daily.",
    "simvastatin": "Simvastatin is used to lower cholesterol. The typical dosage is 10mg to 40mg once daily.",
    "losartan": "Losartan is used to treat high blood pressure. The typical dosage is 50mg to 100mg once daily.",
    "amlodipine": "Amlodipine is used to treat high blood pressure and chest pain. The typical dosage is 5mg to 10mg once daily.",
    "lisinopril": "Lisinopril is used to treat high blood pressure and heart failure. The typical dosage is 10mg to 40mg once daily.",
    "prednisolone": "Prednisolone is a corticosteroid used to treat inflammation. The typical dosage depends on the condition being treated.",
    "hydrochlorothiazide": "Hydrochlorothiazide is a diuretic used to treat high blood pressure and fluid retention. The typical dosage is 12.5mg to 50mg once daily.",
    "vitamin C": "Vitamin C is used to prevent and treat vitamin C deficiency. The typical dosage is 500mg to 1000mg daily.",
    "vitamin D": "Vitamin D is used to treat and prevent vitamin D deficiency. The typical dosage is 1000IU to 2000IU daily.",
    "iron supplements": "Iron supplements are used to treat iron deficiency anemia. The typical dosage is 20mg to 100mg daily.",
    "calcium supplements": "Calcium supplements are used to prevent bone loss. The typical dosage is 500mg to 1000mg daily.",
    "magnesium supplements": "Magnesium supplements are used to treat magnesium deficiency. The typical dosage is 200mg to 400mg daily.",
    "furosemide": "Furosemide is a diuretic used to treat fluid retention and high blood pressure. The typical dosage is 20mg to 80mg once or twice daily.",
    "gabapentin": "Gabapentin is used to treat nerve pain and seizures. The typical dosage is 300mg to 1200mg daily in divided doses.",
    "duloxetine": "Duloxetine is used to treat depression, anxiety, and pain. The typical dosage is 30mg to 60mg daily.",
    "sertraline": "Sertraline is used to treat depression, anxiety, and other mental health conditions. The typical dosage is 25mg to 200mg daily.",
    "escitalopram": "Escitalopram is used to treat anxiety and depression. The typical dosage is 10mg to 20mg daily.",
    "bupropion": "Bupropion is used to treat depression and smoking cessation. The typical dosage is 150mg to 400mg daily.",
    "clonazepam": "Clonazepam is used to treat anxiety and seizures. The typical dosage is 0.5mg to 4mg daily in divided doses.",
    "albuterol": "Albuterol is used to treat asthma and chronic obstructive pulmonary disease (COPD). The typical dosage is 2 puffs every 4-6 hours as needed.",
    "salbutamol": "Salbutamol is used for asthma and bronchospasm. The typical dosage is 100mcg to 200mcg inhaled every 4-6 hours as needed.",
    "montelukast": "Montelukast is used to prevent asthma attacks and treat allergies. The typical dosage is 10mg once daily.",
    "sildenafil": "Sildenafil is used to treat erectile dysfunction. The typical dosage is 25mg to 100mg as needed, taken 30 minutes to 1 hour before sexual activity.",
    "tadalafil": "Tadalafil is used to treat erectile dysfunction and benign prostatic hyperplasia. The typical dosage is 10mg to 20mg as needed.",
    "diazepam": "Diazepam is used to treat anxiety, muscle spasms, and seizures. The typical dosage is 2mg to 10mg daily in divided doses.",
    "ramipril": "Ramipril is used to treat high blood pressure and heart failure. The typical dosage is 2.5mg to 10mg once daily.",
    "paroxetine": "Paroxetine is used to treat depression, anxiety, and OCD. The typical dosage is 20mg to 50mg daily.",
    "fluoxetine": "Fluoxetine is used to treat depression, anxiety, and OCD. The typical dosage is 20mg to 80mg daily.",
    "hydrocodone": "Hydrocodone is an opioid pain reliever. The typical dosage is 5mg to 10mg every 4-6 hours as needed for pain.",
    "tramadol": "Tramadol is used for moderate to severe pain. The typical dosage is 50mg to 100mg every 4-6 hours as needed.",
    "codeine": "Codeine is used to treat mild to moderate pain and cough. The typical dosage is 15mg to 60mg every 4-6 hours as needed.",
    "allopurinol": "Allopurinol is used to prevent gout and kidney stones. The typical dosage is 100mg to 300mg once daily.",
    "methotrexate": "Methotrexate is used to treat cancer and autoimmune conditions. The typical dosage depends on the condition being treated.",
    "ranitidine": "Ranitidine is used to treat acidity, ulcers, and GERD. The typical dosage is 150mg twice daily.",
    "esomeprazole": "Esomeprazole is used to treat acid reflux, ulcers, and GERD. The typical dosage is 20mg to 40mg once daily.",
    "doxycycline": "Doxycycline is an antibiotic used to treat bacterial infections. The typical dosage is 100mg twice daily.",
    "minocycline": "Minocycline is an antibiotic used to treat infections. The typical dosage is 100mg twice daily.",
    "fluconazole": "Fluconazole is an antifungal used to treat fungal infections. The typical dosage is 150mg once weekly.",
    "amitriptyline": "Amitriptyline is used to treat depression, anxiety, and nerve pain. The typical dosage is 25mg to 100mg daily.",
    "sodium chloride": "Sodium chloride is used as an electrolyte replenisher. The typical dosage is 1-2g daily, depending on needs.",
    "benadryl": "Benadryl is an antihistamine used to relieve allergy symptoms. The typical dosage is 25mg to 50mg every 4-6 hours.",
    "loperamide": "Loperamide is used to treat diarrhea. The typical dosage is 2mg after the first loose stool, then 1mg after each subsequent stool.",
    "dimenhydrinate": "Dimenhydrinate is used to treat nausea, vomiting, and motion sickness. The typical dosage is 50mg to 100mg every 4-6 hours.",
    "pantoprazole": "Pantoprazole is used to treat acid reflux and ulcers. The typical dosage is 40mg once daily.",
    "clopidogrel": "Clopidogrel is used to prevent blood clots. The typical dosage is 75mg once daily.",
    "metoprolol": "Metoprolol is used to treat high blood pressure and heart disease. The typical dosage is 25mg to 100mg daily.",
    "terbinafine": "Terbinafine is used to treat fungal infections. The typical dosage is 250mg once daily.",
    "citalopram": "Citalopram is used to treat depression and anxiety. The typical dosage is 20mg to 40mg daily.",
    "buspirone": "Buspirone is used to treat anxiety. The typical dosage is 10mg to 30mg daily in divided doses.",
    "tamsulosin": "Tamsulosin is used to treat benign prostatic hyperplasia (BPH). The typical dosage is 0.4mg to 0.8mg once daily.",
    "bromhexine": "Bromhexine is used to treat chest congestion. The typical dosage is 8mg to 16mg three times daily.",
    "guaifenesin": "Guaifenesin is used to treat chest congestion. The typical dosage is 200mg to 400mg every 4 hours as needed.",
    "zinc supplements": "Zinc is used to boost the immune system and treat zinc deficiency. The typical dosage is 10mg to 50mg daily.",
    "colchicine": "Colchicine is used to treat gout. The typical dosage is 0.6mg once or twice daily.",
    "n-acetylcysteine": "N-acetylcysteine is used to treat acetaminophen overdose and respiratory conditions. The typical dosage is 600mg to 1200mg daily.",
    "prednisone": "Prednisone is a corticosteroid used to treat inflammation. The typical dosage is 5mg to 60mg daily depending on the condition.",
    "etoposide": "Etoposide is used to treat cancer. The dosage depends on the type of cancer and the patient's condition.",
    "amitriptyline": "Amitriptyline is used to treat depression, anxiety, and chronic pain. The typical dosage is 25mg to 100mg daily.",
    "tretinoin": "Tretinoin is used for acne and skin aging. The typical dosage is 0.025% to 0.1% applied topically once daily.",
    "isotretinoin": "Isotretinoin is used to treat severe acne. The typical dosage is 0.5mg to 1mg per kg of body weight per day.",
    "methocarbamol": "Methocarbamol is used to relieve muscle pain and spasms. The typical dosage is 500mg to 750mg every 4-6 hours.",
    "hydroxychloroquine": "Hydroxychloroquine is used to treat malaria and autoimmune diseases like lupus. The typical dosage is 200mg to 400mg daily.",
    "dolo 650": "Dolo 650 is a brand of paracetamol (acetaminophen) used to treat pain and fever. The typical dosage is 650mg every 4 to 6 hours as needed, not exceeding 4g per day.",

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

