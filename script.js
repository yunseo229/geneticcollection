
// ══════════════════════════════════════════════
// DATA (수동 맵핑 좌표 완벽 통합 + 에러 수정 완료)
// ══════════════════════════════════════════════
const TRAITS = [
  {id:'t1', cats:['대사'], name:'카페인 분해속도', nameEn:'Caffeine Metabolism Rate', gene:'CYP1A2 rs762551', lm:'LIVER', lm2:'BRAIN_C', assoc:5, vis:'조건부', bodyPos:{x:0.420, y:0.420}, plei:['t34']},
  {id:'t11', cats:['감각'], name:'매운맛 선호도', nameEn:'Spicy Food Preference', gene:'TRPV1 rs8065080', lm:'MOUTH_R', lm2:'STOMACH', assoc:3.5, vis:'조건부', bodyPos:{x:0.440, y:0.170}, plei:[]},
  {id:'t21', cats:['감각','신체'], name:'암내', nameEn:'Body Odor', gene:'ABCC11 rs1782293', lm:'ARM_L', lm2:'CHEEK_C', assoc:5, vis:'조건부', bodyPos:{x:0.307, y:0.211}, plei:['t5']},
  {id:'t31', cats:['운동'], name:'근육발달', nameEn:'Muscle Development', gene:'ACTN3 rs1815739', lm:'ARM_R', lm2:'LOWER_L', assoc:4.5, vis:'조건부', bodyPos:{x:0.272, y:0.413}, plei:[]},
  {id:'t41', cats:['행동','사회'], name:'정치성향', nameEn:'Political Orientation', gene:'DRD4 rs1800955', lm:'FOREHEAD_R', lm2:'BRAIN_CR', assoc:1, vis:'내적', bodyPos:{x:0.459, y:0.108}, plei:['t38','t45']},
  {id:'t51', cats:['사회','인지'], name:'타인 신뢰 경향', nameEn:'Tendency to Trust Others', gene:'CD38 rs1044482', lm:'FOREHEAD', lm2:'CHEST_CL', assoc:3.5, vis:'내적', bodyPos:{x:0.633, y:0.192}, plei:['t6']},
  {id:'t61', cats:['운동'], name:'종아리/하체 근육 발달', nameEn:'Calf / Lower Body Muscle Dev.', gene:'ACTN3 rs1815739', lm:'LOWER_R', lm2:'LOWER_L', assoc:4.5, vis:'조건부', bodyPos:{x:0.620, y:0.800}, plei:['t60','t62']},
  {id:'t71', cats:['신체'], name:'발가락 길이 비율', nameEn:'Toe Length Ratio', gene:'다인자 유전', lm:'LOWER_L', lm2:'LOWER_R', assoc:3.5, vis:'외적', bodyPos:{x:0.470, y:0.906}, plei:[]},
  {id:'t2', cats:['감각'], name:'고수 혐오', nameEn:'Cilantro Aversion', gene:'OR6A2 rs2853248', lm:'NOSE', lm2:'MOUTH', assoc:4.5, vis:'조건부', bodyPos:{x:0.500, y:0.150}, plei:['t26']},
  {id:'t12', cats:['신체'], name:'모발 생성', nameEn:'Hair Formation', gene:'EDAR rs3827760', lm:'TOP', lm2:'CHEEK_R', assoc:4, vis:'외적', bodyPos:{x:0.500, y:0.050}, plei:['t16']},
  {id:'t22', cats:['신체','대사'], name:'BMI', nameEn:'BMI (Body Mass Index)', gene:'FTO rs1558902', lm:'BRAIN_B', lm2:'STOMACH_L', assoc:4, vis:'외적', bodyPos:{x:0.450, y:0.480}, plei:['t13']},
  {id:'t32', cats:['운동'], name:'지구력', nameEn:'Endurance', gene:'ACE I/D variant', lm:'LOWER_R', lm2:'CHEST_C', assoc:4, vis:'내적', bodyPos:{x:0.460, y:0.350}, plei:[]},
  {id:'t42', cats:['인지','사회'], name:'사회적 거부 민감도', nameEn:'Social Rejection Sensitivity', gene:'OPRM1 rs1799971', lm:'BRAIN_C', lm2:'CHEST_C', assoc:2, vis:'조건부', bodyPos:{x:0.409, y:0.186}, plei:[]},
  {id:'t52', cats:['행동','인지'], name:'위기에서 숨는 성향', nameEn:'Tendency to Hide in Crises', gene:'교감신경', lm:'BRAIN_L', lm2:'CHEST_C', assoc:3, vis:'내적', bodyPos:{x:0.555, y:0.103}, plei:['t20','t55']},
  {id:'t62', cats:['운동'], name:'지구력형 하체 체질', nameEn:'Endurance Lower Body Type', gene:'ACE I/D variant', lm:'LOWER_L', lm2:'CHEST_C', assoc:4, vis:'내적', bodyPos:{x:0.462, y:0.799}, plei:['t61']},
  {id:'t72', cats:['신체'], name:'다리 털/체모 농도', nameEn:'Leg Hair / Body Hair Density', gene:'다인자 유전', lm:'LOWER_R', lm2:'LOWER_L', assoc:3, vis:'외적', bodyPos:{x:0.618, y:0.828}, plei:[]},
  {id:'t3', cats:['대사'], name:'알코올 홍조', nameEn:'Alcohol Flush Reaction', gene:'ALDH2 rs671', lm:'MOUTH', lm2:'LIVER', assoc:5, vis:'조건부', bodyPos:{x:0.380, y:0.320}, plei:[]},
  {id:'t13', cats:['대사','행동'], name:'먹는 양', nameEn:'Food Intake Volume', gene:'FTO rs9939609', lm:'BRAIN_B', lm2:'STOMACH', assoc:4.5, vis:'조건부', bodyPos:{x:0.550, y:0.440}, plei:['t22']},
  {id:'t23', cats:['인지','행동'], name:'불안감/기분조절', nameEn:'Anxiety / Mood Regulation', gene:'BDNF SLC6A4', lm:'BRAIN_L', lm2:'FOREHEAD', assoc:3.5, vis:'내적', bodyPos:{x:0.500, y:0.070}, plei:['t17','t54']},
  {id:'t33', cats:['인지'], name:'행복기본값', nameEn:'Baseline Happiness', gene:'FAAH rs324420', lm:'BRAIN_CR2', lm2:'FOREHEAD', assoc:3, vis:'내적', bodyPos:{x:0.440, y:0.070}, plei:[]},
  {id:'t43', cats:['행동'], name:'수면시간 성향', nameEn:'Sleep Duration Tendency', gene:'DEC2 rs121912617', lm:'BRAIN_B', lm2:'CHEST_R', assoc:4, vis:'내적', bodyPos:{x:0.449, y:0.043}, plei:[]},
  {id:'t53', cats:['행동','사회'], name:'공격성 방향', nameEn:'Direction of Aggression', gene:'HTR2A rs6311', lm:'BRAIN_R', lm2:'FOREHEAD', assoc:3.5, vis:'내적', bodyPos:{x:0.452, y:0.095}, plei:[]},
  {id:'t63', cats:['감각'], name:'추위에 약한 하체 체감', nameEn:'Cold Sensitivity in Lower Body', gene:'ACTN3 rs1815739', lm:'LOWER_C', lm2:'ARM_R', assoc:4, vis:'조건부', bodyPos:{x:0.437, y:0.776}, plei:[]},
  {id:'t73', cats:['신체'], name:'하지 혈관 반응성', nameEn:'Lower Limb Vascular Reactivity', gene:'ACE 혈관조절 복합', lm:'LOWER_L', lm2:'CHEST_C', assoc:3.5, vis:'내적', bodyPos:{x:0.421, y:0.908}, plei:['t74']},
  {id:'t4', cats:['대사'], name:'유당불내증', nameEn:'Lactose Intolerance', gene:'LCT rs4988235', lm:'STOMACH', lm2:'LOWER_C', assoc:5, vis:'조건부', bodyPos:{x:0.500, y:0.440}, plei:[]},
  {id:'t14', cats:['행동','인지','대사'], name:'알코올 의존도', nameEn:'Alcohol Dependence', gene:'ADH4 rs1042363', lm:'BRAIN_CR', lm2:'LIVER', assoc:3.5, vis:'내적', bodyPos:{x:0.420, y:0.420}, plei:[]},
  {id:'t24', cats:['신체'], name:'탈모 성향', nameEn:'Hair Loss Tendency', gene:'AR rs1385699', lm:'TOP_R', lm2:'BODY_C', assoc:4.5, vis:'외적', bodyPos:{x:0.480, y:0.030}, plei:[]},
  {id:'t34', cats:['대사'], name:'알코올 취약도', nameEn:'Alcohol Vulnerability', gene:'CYP1A2 rs2031920', lm:'LIVER', lm2:'MOUTH', assoc:4, vis:'조건부', bodyPos:{x:0.620, y:0.320}, plei:['t1']},
  {id:'t44', cats:['신체'], name:'피부 탄력/노화', nameEn:'Skin Elasticity / Aging', gene:'MMP1 rs1799750', lm:'CHEEK_R', lm2:'CHEEK_L', assoc:4, vis:'외적', bodyPos:{x:0.378, y:0.222}, plei:[]},
  {id:'t54', cats:['인지','행동'], name:'손실 회피 성향', nameEn:'Loss Aversion Tendency', gene:'SLC6A4 rs25531', lm:'FOREHEAD_L', lm2:'BRAIN_L', assoc:4, vis:'내적', bodyPos:{x:0.460, y:0.070}, plei:['t23']},
  {id:'t64', cats:['신체'], name:'엉덩이/골반 체형', nameEn:'Hip / Pelvis Body Shape', gene:'다인자 유전', lm:'LOWER_C', lm2:'STOMACH_B', assoc:4, vis:'외적', bodyPos:{x:0.470, y:0.596}, plei:['t67','t68']},
  {id:'t74', cats:['신체'], name:'하지 부종', nameEn:'Lower Limb Edema', gene:'순환·림프 관련 복합', lm:'LOWER_R', lm2:'LOWER_L', assoc:3.5, vis:'조건부', bodyPos:{x:0.596, y:0.868}, plei:['t73']},
  {id:'t5', cats:['신체'], name:'마른 귀지', nameEn:'Dry Earwax', gene:'ABCC11 rs1782293', lm:'R_EAR', lm2:'BRAIN_B', assoc:5, vis:'내적', bodyPos:{x:0.525, y:0.144}, plei:['t21']},
  {id:'t15', cats:['행동'], name:'아침형/저녁형', nameEn:'Morning / Evening Person', gene:'PER3 rs1801260', lm:'BRAIN_C', lm2:'BRAIN_B', assoc:4, vis:'내적', bodyPos:{x:0.430, y:0.080}, plei:[]},
  {id:'t25', cats:['신체'], name:'쌍꺼풀 유무', nameEn:'Double Eyelids', gene:'다인자 유전', lm:'R_EYE', lm2:'L_EYE', assoc:4, vis:'외적', bodyPos:{x:0.476, y:0.139}, plei:[]},
  {id:'t35', cats:['인지','행동'], name:'우울증 민감도', nameEn:'Depression Sensitivity', gene:'LHPP SIRT1', lm:'FOREHEAD', lm2:'CHEST_R', assoc:2.5, vis:'내적', bodyPos:{x:0.540, y:0.070}, plei:[]},
  {id:'t45', cats:['행동','인지'], name:'새로운 것 선호', nameEn:'Novelty Seeking', gene:'DRD4 7R variant', lm:'BRAIN_CR3', lm2:'FOREHEAD', assoc:3.5, vis:'내적', bodyPos:{x:0.440, y:0.530}, plei:['t38','t41']},
  {id:'t55', cats:['행동','인지'], name:'충동 강도', nameEn:'Impulsivity Intensity', gene:'교감신경', lm:'BRAIN_CR', lm2:'CHEST_R', assoc:4, vis:'조건부', bodyPos:{x:0.500, y:0.320}, plei:['t20','t52']},
  {id:'t65', cats:['신체'], name:'허벅지 근육량 경향', nameEn:'Thigh Muscle Mass Tendency', gene:'FTO MC4R ACTN3', lm:'LOWER_L', lm2:'LOWER_R', assoc:4, vis:'조건부', bodyPos:{x:0.450, y:0.700}, plei:['t66']},
  {id:'t75', cats:['신체'], name:'엉덩이-허벅지 비율', nameEn:'Hip-to-Thigh Ratio', gene:'다인자 유전', lm:'LOWER_C', lm2:'STOMACH_L', assoc:4, vis:'외적', bodyPos:{x:0.460, y:0.630}, plei:['t64']},
  {id:'t6', cats:['인지','사회'], name:'공감능력', nameEn:'Empathy', gene:'OXTR rs53576', lm:'FOREHEAD', lm2:'CHEST_C', assoc:3.5, vis:'내적', bodyPos:{x:0.500, y:0.070}, plei:['t19','t51']},
  {id:'t16', cats:['신체'], name:'머리카락 굵기', nameEn:'Hair Thickness', gene:'EDAR rs3827760', lm:'TOP', lm2:'CHEEK_L', assoc:4, vis:'외적', bodyPos:{x:0.500, y:0.050}, plei:['t12']},
  {id:'t26', cats:['감각','인지'], name:'와인 맛 구별', nameEn:'Wine Taste Discrimination', gene:'TAS2R38 rs713598', lm:'MOUTH_L', lm2:'FOREHEAD', assoc:4, vis:'조건부', bodyPos:{x:0.560, y:0.170}, plei:['t2']},
  {id:'t36', cats:['운동','행동'], name:'걷기 성향', nameEn:'Walking Tendency', gene:'소뇌/척수', lm:'TOP', lm2:'LOWER_C', assoc:3.5, vis:'내적', bodyPos:{x:0.490, y:0.577}, plei:[]},
  {id:'t46', cats:['감각','인지'], name:'향기 경험 성향', nameEn:'Fragrance Experience Tendency', gene:'변연계', lm:'NOSE', lm2:'BRAIN_C', assoc:4, vis:'조건부', bodyPos:{x:0.530, y:0.150}, plei:[]},
  {id:'t56', cats:['노화'], name:'노화 속도', nameEn:'Aging Rate', gene:'FOXO3 rs2802292', lm:'LIVER', lm2:'ARM_L', assoc:4.5, vis:'내적', bodyPos:{x:0.500, y:0.550}, plei:[]},
  {id:'t66', cats:['신체'], name:'피하지방 분포', nameEn:'Subcutaneous Fat Distribution', gene:'FTO MC4R', lm:'STOMACH_B', lm2:'LOWER_C', assoc:4, vis:'조건부', bodyPos:{x:0.550, y:0.650}, plei:['t65']},
  {id:'t76', cats:['신체'], name:'골반 폭', nameEn:'Pelvis Width', gene:'다인자 유전', lm:'STOMACH_B', lm2:'LOWER_C', assoc:4, vis:'외적', bodyPos:{x:0.540, y:0.600}, plei:['t64']},
  {id:'t7', cats:['행동','인지'], name:'강박성 성향', nameEn:'Obsessive-Compulsive Tendency', gene:'전전두엽-기저핵', lm:'FOREHEAD', lm2:'BRAIN_C', assoc:3, vis:'내적', bodyPos:{x:0.460, y:0.070}, plei:[]},
  {id:'t17', cats:['인지'], name:'단기 기억력', nameEn:'Short-Term Memory', gene:'BDNF rs6265', lm:'TEMPLE_R', lm2:'FOREHEAD', assoc:4, vis:'내적', bodyPos:{x:0.500, y:0.080}, plei:['t23']},
  {id:'t27', cats:['대사','감각'], name:'내장 선호', nameEn:'Offal (Organ Meat) Preference', gene:'위장관 회로', lm:'STOMACH', lm2:'BRAIN_CR', assoc:3.5, vis:'조건부', bodyPos:{x:0.550, y:0.440}, plei:[]},
  {id:'t37', cats:['행동'], name:'폭력성', nameEn:'Aggressiveness / Violence', gene:'MAOA rs909525', lm:'BRAIN_L', lm2:'FOREHEAD', assoc:3, vis:'내적', bodyPos:{x:0.502, y:0.127}, plei:[]},
  {id:'t47', cats:['신체'], name:'뼈 관련 형질', nameEn:'Bone-related Traits', gene:'골세포', lm:'ARM_L', lm2:'LOWER_R', assoc:4, vis:'조건부', bodyPos:{x:0.500, y:0.400}, plei:[]},
  {id:'t57', cats:['노화','인지'], name:'알츠하이머 위험도', nameEn:'Alzheimer's Risk', gene:'APOE e4 variant', lm:'TOP', lm2:'CHEST_C', assoc:5, vis:'내적', bodyPos:{x:0.500, y:0.100}, plei:[]},
  {id:'t67', cats:['신체'], name:'발 크기/발 모양', nameEn:'Foot Size / Foot Shape', gene:'다인자 유전', lm:'LOWER_L', lm2:'LOWER_R', assoc:3.5, vis:'외적', bodyPos:{x:0.450, y:0.859}, plei:[]},
  {id:'t77', cats:['신체'], name:'하지 관절 가동성', nameEn:'Lower Limb Joint Mobility', gene:'COL계열 결합조직 복합', lm:'LOWER_L', lm2:'LOWER_R', assoc:3.5, vis:'조건부', bodyPos:{x:0.598, y:0.895}, plei:[]},
  {id:'t8', cats:['인지'], name:'희망/기대 성향', nameEn:'Hope / Expectation Tendency', gene:'해마/변연계', lm:'BRAIN_T', lm2:'BRAIN_CL', assoc:3, vis:'내적', bodyPos:{x:0.500, y:0.060}, plei:[]},
  {id:'t18', cats:['감각','인지'], name:'통증 민감도', nameEn:'Pain Sensitivity', gene:'COMT rs4680', lm:'BODY_C', lm2:'BRAIN_L', assoc:4, vis:'조건부', bodyPos:{x:0.559, y:0.043}, plei:[]},
  {id:'t28', cats:['대사','감각'], name:'초콜릿 선호', nameEn:'Chocolate Preference', gene:'보상회로', lm:'MOUTH', lm2:'LIVER', assoc:3.5, vis:'조건부', bodyPos:{x:0.500, y:0.190}, plei:[]},
  {id:'t38', cats:['행동','인지'], name:'불확실성 선호', nameEn:'Uncertainty Preference', gene:'DRD4 7R variant', lm:'FOREHEAD_L', lm2:'BRAIN_B', assoc:3, vis:'내적', bodyPos:{x:0.460, y:0.070}, plei:['t41','t45']},
  {id:'t48', cats:['감각'], name:'후각 민감성', nameEn:'Olfactory Sensitivity', gene:'후각상피', lm:'NOSE_L', lm2:'BRAIN_R', assoc:4, vis:'조건부', bodyPos:{x:0.500, y:0.150}, plei:[]},
  {id:'t58', cats:['면역'], name:'바이러스 취약성', nameEn:'Viral Vulnerability', gene:'HLA rs2395029', lm:'CHEST_B', lm2:'NOSE', assoc:4.5, vis:'조건부', bodyPos:{x:0.500, y:0.360}, plei:[]},
  {id:'t68', cats:['신체'], name:'발목 유연성', nameEn:'Ankle Flexibility', gene:'다인자 유전', lm:'LOWER_R', lm2:'LOWER_L', assoc:3.5, vis:'외적', bodyPos:{x:0.601, y:0.926}, plei:[]},
  {id:'t9', cats:['사회','인지'], name:'사회성', nameEn:'Sociability', gene:'사회인지 네트워크', lm:'BRAIN_CR', lm2:'TEMPLE_L', assoc:3.5, vis:'내적', bodyPos:{x:0.564, y:0.086}, plei:[]},
  {id:'t19', cats:['인지','행동'], name:'스트레스 회복력', nameEn:'Stress Resilience', gene:'OXTR rs2254298', lm:'BRAIN_C', lm2:'CHEST_C', assoc:3, vis:'내적', bodyPos:{x:0.603, y:0.188}, plei:['t6','t51']},
  {id:'t29', cats:['대사','행동'], name:'음주량', nameEn:'Alcohol Consumption Volume', gene:'보상회로', lm:'BRAIN_CR', lm2:'LIVER', assoc:4, vis:'조건부', bodyPos:{x:0.420, y:0.320}, plei:[]},
  {id:'t39', cats:['면역','감각'], name:'모기 물릴 확률', nameEn:'Mosquito Bite Susceptibility', gene:'HLA-DBQ1 rs1052133', lm:'ARM_R2', lm2:'BODY_C', assoc:4, vis:'조건부', bodyPos:{x:0.354, y:0.543}, plei:[]},
  {id:'t49', cats:['감각','대사'], name:'단맛 민감도', nameEn:'Sweetness Sensitivity', gene:'FGF21 rs7590720', lm:'MOUTH_B', lm2:'BRAIN_B', assoc:4, vis:'조건부', bodyPos:{x:0.500, y:0.190}, plei:[]},
  {id:'t59', cats:['신체'], name:'다리 길이 비대칭', nameEn:'Leg Length Asymmetry', gene:'유전성 편측비대 관련', lm:'LOWER_L', lm2:'LOWER_R', assoc:5, vis:'외적', bodyPos:{x:0.419, y:0.747}, plei:[]},
  {id:'t69', cats:['신체'], name:'무릎 통증 취약성', nameEn:'Knee Pain Vulnerability', gene:'다인자 유전', lm:'LOWER_L', lm2:'LOWER_R', assoc:3.5, vis:'조건부', bodyPos:{x:0.420, y:0.840}, plei:[]},
  {id:'t10', cats:['감각'], name:'후각 반응', nameEn:'Olfactory Response', gene:'후각수용체', lm:'NOSE_L', lm2:'BRAIN_L', assoc:4, vis:'조건부', bodyPos:{x:0.530, y:0.150}, plei:[]},
  {id:'t20', cats:['운동','행동'], name:'단기 폭발 에너지', nameEn:'Short-Term Explosive Energy', gene:'ACTN3 rs1815739', lm:'CHEST_R', lm2:'ARM_R', assoc:4.5, vis:'조건부', bodyPos:{x:0.287, y:0.341}, plei:['t52','t55']},
  {id:'t30', cats:['인지','행동'], name:'습관 형성', nameEn:'Habit Formation', gene:'선조체', lm:'FOREHEAD', lm2:'BRAIN_C', assoc:4, vis:'내적', bodyPos:{x:0.500, y:0.080}, plei:[]},
  {id:'t40', cats:['인지'], name:'지능(IQ)', nameEn:'Intelligence (IQ)', gene:'SHANK3 NR2B', lm:'TOP', lm2:'BRAIN_C', assoc:3.5, vis:'내적', bodyPos:{x:0.500, y:0.060}, plei:[]},
  {id:'t50', cats:['대사','행동'], name:'잦은 식사 횟수', nameEn:'Frequent Eating', gene:'인슐린 축', lm:'BRAIN_B', lm2:'STOMACH_R', assoc:3.5, vis:'내적', bodyPos:{x:0.550, y:0.440}, plei:[]},
  {id:'t60', cats:['신체'], name:'근감소 경향', nameEn:'Muscle Loss (Sarcopenia) Tendency', gene:'ADAM8 BECN1 KLF4', lm:'LOWER_C', lm2:'ARM_L', assoc:4.5, vis:'조건부', bodyPos:{x:0.436, y:0.718}, plei:['t61']},
  {id:'t70', cats:['신체'], name:'발바닥 압력/보행 패턴', nameEn:'Plantar Pressure / Gait Pattern', gene:'복합유전', lm:'LOWER_C', lm2:'LOWER_L', assoc:3, vis:'조건부', bodyPos:{x:0.424, y:0.825}, plei:[]},
];

const CATEGORY_INFO = [
  {name:'신체', nameEn:'BODY', color:'#9500D3'},       
  {name:'감각', nameEn:'SENSE', color:'#FE1793'},     
  {name:'대사', nameEn:'METABOLISM', color:'#56F5F4'},
  {name:'행동', nameEn:'BEHAVIOR', color:'#FE01FF'},   
  {name:'인지', nameEn:'COGNITION', color:'#03FB9B'}, 
  {name:'운동', nameEn:'MOTOR', color:'#7B67ED'},     
  {name:'사회', nameEn:'SOCIAL', color:'#ADFF30'},     
  {name:'노화', nameEn:'AGING', color:'#0000FF'},      
  {name:'면역', nameEn:'IMMUNE', color:'#00B8F3'}      
];

const CAT_C = CATEGORY_INFO.reduce((acc, curr) => {
  acc[curr.name] = curr.color;
  return acc;
}, {});

const CENTER_LINES = [
  {id:'t1', text:'카페인 분해속도 — CYP1A2 (rs762551). 간과 중추신경계의 동시 반응. 흡연 여부가 분해속도를 바꾼다.', textEn:'Caffeine Metabolism Rate — CYP1A2 (rs762551). Simultaneous response of the liver and central nervous system. Smoking status alters the metabolism rate.'},
  {id:'t2', text:'고수 혐오 — OR6A2 (rs2853248). 후각상피와 혀 미뢰의 연결. 동일 향분자를 비누맛으로 감지하는 수용체.', textEn:'Cilantro Aversion — OR6A2 (rs2853248). Connection between the olfactory epithelium and taste buds. Receptors that perceive the same scent molecules as a soapy taste.'},
  {id:'t3', text:'알코올 홍조 — ALDH2 (rs671). 구강점막과 간 대사의 동시 작용. 동아시아 변이, 서양인에게는 드묾.', textEn:'Alcohol Flush Reaction — ALDH2 (rs671). Simultaneous action of the oral mucosa and liver metabolism. East Asian variant, rare in Westerners.'},
  {id:'t4', text:'유당불내증 — LCT (rs4988235). 소장 점막과 복부 자율신경계. 한국인 75% 이상 해당.', textEn:'Lactose Intolerance — LCT (rs4988235). Small intestine mucosa and abdominal autonomic nervous system. Applies to over 75% of Koreans.'},
  {id:'t5', text:'마른 귀지 — ABCC11 (rs1782293). 지방조직과 시상하부 분비선 조절. 암내 유전자와 동일.', textEn:'Dry Earwax — ABCC11 (rs1782293). Adipose tissue and hypothalamic gland regulation. Same as the body odor gene.'},
  {id:'t6', text:'공감능력 — OXTR (rs53576). 전전두엽과 심장 자율신경(옥시토신 축). 환경 요인의 영향이 크다.', textEn:'Empathy — OXTR (rs53576). Prefrontal cortex and cardiac autonomic nervous system (oxytocin axis). Heavily influenced by environmental factors.'},
  {id:'t7', text:'강박성 성향 — 전전두엽-기저핵 회로. 시상하부와 연결된 반복 행동 알고리즘.', textEn:'Obsessive-Compulsive Tendency — Prefrontal-basal ganglia circuit. Repetitive behavior algorithm connected to the hypothalamus.'},
  {id:'t8', text:'희망/기대 성향 — 해마/변연계. 전전두엽과 해마, 변연계의 미래 예측 네트워크.', textEn:'Hope / Expectation Tendency — Hippocampus / Limbic system. Future prediction network of the prefrontal cortex, hippocampus, and limbic system.'},
  {id:'t9', text:'사회성 — 사회인지 네트워크. 편도체 반응과 전두엽 조절의 균형.', textEn:'Sociability — Social cognition network. Balance between amygdala response and frontal lobe regulation.'},
  {id:'t10', text:'후각 반응 — 후각수용체. 후각상피와 변연계의 즉각 반응. 기억과 감정에 직접 연결.', textEn:'Olfactory Response — Olfactory receptors. Immediate response of the olfactory epithelium and limbic system. Directly connected to memory and emotion.'},
  {id:'t11', text:'매운맛 선호도 — TRPV1 (rs8065080). 구강 통증 수용체 민감도. 같은 캡사이신, 다른 통증.', textEn:'Spicy Food Preference — TRPV1 (rs8065080). Oral pain receptor sensitivity. Same capsaicin, different pain levels.'},
  {id:'t12', text:'모발 생성 — EDAR (rs3827760). 모낭과 외배엽 피부 발달. 머리카락 굵기와 공유 유전자.', textEn:'Hair Growth / Formation — EDAR (rs3827760). Hair follicle and ectodermal skin development. Shared gene with hair thickness.'},
  {id:'t13', text:'먹는 양 — FTO (rs9939609). 시상하부 식탐 회로와 위장관 미주신경. 배고픔/배부름 신호 알고리즘.', textEn:'Food Intake Volume — FTO (rs9939609). Hypothalamic appetite circuit and gastrointestinal vagus nerve. Hunger/satiety signaling algorithm.'},
  {id:'t14', text:'알코올 의존도 — ADH4 (rs1042363). 뇌 보상회로와 간 행동축의 연결. 중독 취약성의 생물학적 배경.', textEn:'Alcohol Dependence — ADH4 (rs1042363). Connection between the brain\'s reward circuit and liver action axis. Biological background for addiction vulnerability.'},
  {id:'t15', text:'아침형/저녁형 — PER3 (rs1801260). 시교차상핵과 송과체의 생체시계. 한국인 60~65% 저녁형.', textEn:'Morning / Evening Person — PER3 (rs1801260). Biological clock of the suprachiasmatic nucleus and pineal gland. 60-65% of Koreans are evening types.'},
  {id:'t16', text:'머리카락 굵기 — EDAR (rs3827760). 모낭과 두피, 피부 조직 공유. 동아시아 특징적 변이.', textEn:'Hair Thickness — EDAR (rs3827760). Shared by hair follicles, scalp, and skin tissue. Characteristic East Asian variant.'},
  {id:'t17', text:'단기 기억력 — BDNF (rs6265). 해마와 전전두엽 대뇌피질 사이의 각인. 단기→장기 기억 전환.', textEn:'Short-Term Memory — BDNF (rs6265). Imprinting between the hippocampus and prefrontal cortex. Short-term to long-term memory conversion.'},
  {id:'t18', text:'통증 민감도 — COMT (rs4680). 척수 통증회로와 편도체 감각. 도파민 분해 효소 활성이 관건.', textEn:'Pain Sensitivity — COMT (rs4680). Spinal cord pain circuit and amygdala sensation. Dopamine-degrading enzyme activity is key.'},
  {id:'t19', text:'스트레스 회복력 — OXTR (rs2254298). HPA축(뇌)과 자율신경계(심폐)의 연동. 정서적 회복 탄력성.', textEn:'Stress Resilience — OXTR (rs2254298). Linkage of the HPA axis (brain) and autonomic nervous system (cardiopulmonary). Emotional resilience.'},
  {id:'t20', text:'단기 폭발 에너지 — ACTN3 (rs1815739). 교감신경과 골격근 미토콘드리아. 스프린터 유전자.', textEn:'Short-Term Explosive Energy — ACTN3 (rs1815739). Sympathetic nervous system and skeletal muscle mitochondria. The "sprinter" gene.'},
  {id:'t21', text:'암내 — ABCC11 (rs1782293). 아포크린 땀샘과 피부 분비 조절. 마른 귀지 유전자와 동일.', textEn:'Body Odor (Osmidrosis) — ABCC11 (rs1782293). Apocrine sweat gland and skin secretion regulation. Same as the dry earwax gene.'},
  {id:'t22', text:'BMI — FTO (rs1558902). 시상하부 식욕 중추와 지방조직. 비만 취약성 지수.', textEn:'BMI (Body Mass Index) — FTO (rs1558902). Hypothalamic appetite center and adipose tissue. Obesity vulnerability index.'},
  {id:'t23', text:'불안감/기분조절 — BDNF, SLC6A4. 편도체와 전전두엽 세로토닌계 연동. 단기 기억력과 연관.', textEn:'Anxiety / Mood Regulation — BDNF, SLC6A4. Linkage of the amygdala and prefrontal serotonin system. Associated with short-term memory.'},
  {id:'t24', text:'탈모 성향 — AR (rs1385699). 두피 모낭과 호르몬 축. 모계 편향 유전.', textEn:'Hair Loss Tendency — AR (rs1385699). Scalp hair follicles and hormone axis. Maternally biased inheritance.'},
  {id:'t25', text:'쌍꺼풀 유무 — 다인자 유전. 안검 피하지방과 안면 근막. 한국인 30~40% 보유.', textEn:'Double Eyelids — Polygenic inheritance. Eyelid subcutaneous fat and facial fascia. Present in 30-40% of Koreans.'},
  {id:'t26', text:'와인 맛 구별 — TAS2R38 (rs713598). 혀 미뢰/후각상피와 전전두엽 인지. 고수 혐오와 동일 유전자.', textEn:'Wine Taste Discrimination — TAS2R38 (rs713598). Tongue taste buds/olfactory epithelium and prefrontal cognition. Same gene as cilantro aversion.'},
  {id:'t27', text:'내장 선호 — 위장관 회로. 위장관 상태와 뇌 보상회로 연결. 장내 세균의 영향.', textEn:'Offal (Organ Meat) Preference — Gastrointestinal circuit. Connection between GI tract status and brain reward circuit. Influence of gut microbiota.'},
  {id:'t28', text:'초콜릿 선호 — 보상회로. 구강 감각과 간 대사, 뇌 보상회로의 연결고리.', textEn:'Chocolate Preference — Reward circuit. Link between oral sensation, liver metabolism, and the brain\'s reward circuit.'},
  {id:'t29', text:'음주량 — 보상회로. 뇌 보상회로와 간 분해 능력의 줄다리기.', textEn:'Alcohol Consumption Volume — Reward circuit. Tug-of-war between the brain\'s reward circuit and the liver\'s breakdown capacity.'},
  {id:'t30', text:'습관 형성 — 선조체. 전전두엽과 기저핵 선조체의 연결. 반복 행동의 생물학적 기반.', textEn:'Habit Formation — Striatum. Connection between the prefrontal cortex and basal ganglia striatum. Biological basis of repetitive behaviors.'},
  {id:'t31', text:'근육발달 — ACTN3 (rs1815739). 골격근 힘줄과 전신 운동신경. 폭발력 관련 스프린터 유전자.', textEn:'Muscle Development — ACTN3 (rs1815739). Skeletal muscle tendons and systemic motor nerves. Sprinter gene related to explosive power.'},
  {id:'t32', text:'지구력 — ACE I/D variant. 골격근 미토콘드리아와 심폐 혈관. 한국인 중 XX형 비율 높음.', textEn:'Endurance — ACE I/D variant. Skeletal muscle mitochondria and cardiopulmonary blood vessels. High proportion of XX type among Koreans.'},
  {id:'t33', text:'행복기본값 — FAAH (rs324420). 칸나비노이드계 보상회로와 전전두엽. 낙천성 세팅값.', textEn:'Baseline Happiness — FAAH (rs324420). Cannabinoid reward circuit and prefrontal cortex. Optimism set-point.'},
  {id:'t34', text:'알코올 취약도 — CYP1A2 (rs2031920). 간 대사와 구강감각/보상회로. 카페인 분해와 동일 유전자.', textEn:'Alcohol Vulnerability — CYP1A2 (rs2031920). Liver metabolism and oral sensation/reward circuit. Same gene as caffeine metabolism.'},
  {id:'t35', text:'우울증 민감도 — LHPP, SIRT1. 전전두엽/해마와 HPA 스트레스축. 환경 트리거의 영향이 크다.', textEn:'Depression Sensitivity — LHPP, SIRT1. Prefrontal cortex/hippocampus and HPA stress axis. Heavily influenced by environmental triggers.'},
  {id:'t36', text:'걷기 성향 — 소뇌/척수. 운동피질/소뇌와 하지근육의 연결.', textEn:'Walking Tendency — Cerebellum / Spinal cord. Connection between the motor cortex/cerebellum and lower limb muscles.'},
  {id:'t37', text:'폭력성 — MAOA (rs909525). 편도체 감정과 전전두엽 통제 시스템. 모계 편향 X염색체 연관.', textEn:'Aggressiveness / Violence — MAOA (rs909525). Amygdala emotion and prefrontal control system. Maternally biased X-chromosome linkage.'},
  {id:'t38', text:'불확실성 선호 — DRD4 7R variant. 전전두엽 판단력과 시상하부 본능. 모험기질과 연결.', textEn:'Uncertainty Preference — DRD4 7R variant. Prefrontal judgment and hypothalamic instinct. Linked to an adventurous temperament.'},
  {id:'t39', text:'모기 물릴 확률 — HLA-DBQ1 (rs1052133). 피부 표면과 전신 염증/혈관 반응. 면역계에 의한 체취 결정.', textEn:'Mosquito Bite Susceptibility — HLA-DQB1 (rs1052133). Skin surface and systemic inflammation/vascular response. Body odor determined by the immune system.'},
  {id:'t40', text:'지능(IQ) — SHANK3, NR2B. 대뇌피질 네트워크와 해마 시냅스. 다인자 유전의 복합체.', textEn:'Intelligence (IQ) — SHANK3, NR2B. Cerebral cortex network and hippocampal synapses. Complex polygenic inheritance.'},
  {id:'t41', text:'정치성향 — DRD4 (rs1800955). 전전두엽 판단과 뇌 보상회로 연결. 환경적 영향이 지배적.', textEn:'Political Orientation — DRD4 (rs1800955). Prefrontal judgment and brain reward circuit connection. Dominant environmental influence.'},
  {id:'t42', text:'사회적 거부 민감도 — OPRM1 (rs1799971). 변연계와 심장부근 사회통증 회로. 거절 시 뇌의 물리적 고통 반응.', textEn:'Social Rejection Sensitivity — OPRM1 (rs1799971). Limbic system and heart-adjacent social pain circuit. The brain\'s physical pain response to rejection.'},
  {id:'t43', text:'수면시간 성향 — DEC2 (rs121912617). 시상하부 생체시계와 뇌간 조절. 6시간 수면 가능 희귀 변이.', textEn:'Sleep Duration Tendency — DEC2 (rs121912617). Hypothalamic biological clock and brainstem regulation. Rare variant allowing 6-hour sleep.'},
  {id:'t44', text:'피부 탄력/노화 — MMP1 (rs1799750). 진피층과 콜라겐 섬유아세포. 콜라겐 분해 효소 활성.', textEn:'Skin Elasticity / Aging — MMP1 (rs1799750). Dermis layer and collagen fibroblasts. Collagen-degrading enzyme activity.'},
  {id:'t45', text:'새로운 것 선호 — DRD4 7R variant. 보상회로 자극과 전전두엽 인지. 정치성향과 동일 유전자.', textEn:'Novelty Seeking — DRD4 7R variant. Reward circuit stimulation and prefrontal cognition. Same gene as political orientation.'},
  {id:'t46', text:'향기 경험 성향 — 변연계. 후각/미각 상피와 변연계 기억회로. 냄새로 기억을 저장하는 알고리즘.', textEn:'Fragrance Experience Tendency — Limbic system. Olfactory/taste epithelium and limbic memory circuit. Algorithm that stores memories through scents.'},
  {id:'t47', text:'뼈 관련 형질 — 골세포. 뼈, 골세포 및 호르몬 축 전신 연결.', textEn:'Bone-related Traits — Osteocytes. Systemic connection of bones, osteocytes, and the hormone axis.'},
  {id:'t48', text:'후각 민감성 — 후각상피. 비강 수용체와 변연계 감정처리.', textEn:'Olfactory Sensitivity — Olfactory epithelium. Nasal receptors and limbic emotion processing.'},
  {id:'t49', text:'단맛 민감도 — FGF21 (rs7590720). 혀 미뢰와 시상하부 보상회로. 당분 탐닉 알고리즘.', textEn:'Sweetness Sensitivity — FGF21 (rs7590720). Tongue taste buds and hypothalamic reward circuit. Sugar craving algorithm.'},
  {id:'t50', text:'잦은 식사 횟수 — 인슐린 축. 시상하부 명령과 위장관/인슐린 축.', textEn:'Frequent Eating — Insulin axis. Hypothalamic commands and the gastrointestinal/insulin axis.'},
  {id:'t51', text:'타인 신뢰 경향 — CD38 (rs1044482). 전전두엽 사회인지와 심폐 옥시토신 축.', textEn:'Tendency to Trust Others — CD38 (rs1044482). Prefrontal social cognition and cardiopulmonary oxytocin axis.'},
  {id:'t52', text:'위기에서 숨는 성향 — 교감신경. 편도체 공포 인지와 교감신경 긴장.', textEn:'Tendency to Hide in Crises — Sympathetic nervous system. Amygdala fear cognition and sympathetic nervous tension.'},
  {id:'t53', text:'공격성 방향 — HTR2A (rs6311). 편도체 흥분과 전전두엽 세로토닌 통제.', textEn:'Direction of Aggression — HTR2A (rs6311). Amygdala excitation and prefrontal serotonin control.'},
  {id:'t54', text:'손실 회피 성향 — SLC6A4 (rs25531). 전전두엽 득실 판단과 편도체 공포.', textEn:'Loss Aversion Tendency — SLC6A4 (rs25531). Prefrontal cost-benefit judgment and amygdala fear.'},
  {id:'t55', text:'충동 강도 — 교감신경. 뇌 보상회로 자극과 교감신경 활성.', textEn:'Impulsivity Intensity — Sympathetic nervous system. Brain reward circuit stimulation and sympathetic nervous activity.'},
  {id:'t56', text:'노화 속도 — FOXO3 (rs2802292). 조절축 대사계와 근육 면역계 전체. 수명 세팅값.', textEn:'Aging Rate — FOXO3 (rs2802292). Regulatory axis metabolism and the entire muscular immune system. Lifespan set-point.'},
  {id:'t57', text:'알츠하이머 위험도 — APOE e4. 뇌 해마 기억과 전신 지질/혈관 대사. 한국인 10~15% 보유.', textEn:'Alzheimer\'s Risk — APOE e4. Brain hippocampal memory and systemic lipid/vascular metabolism. Present in 10-15% of Koreans.'},
  {id:'t58', text:'바이러스 취약성 — HLA 복합체. 전신 면역 림프와 호흡기 점막 방어.', textEn:'Viral Vulnerability — HLA complex. Systemic immune lymph and respiratory mucosal defense.'},
  {id:'t59', text:'다리 길이 비대칭 — 유전성 편측비대 관련. 한쪽 다리 길이 차이, 성장 메커니즘과 연관.', textEn:'Leg Length Asymmetry — Hereditary hemihypertrophy. Difference in the length of one leg, associated with growth mechanisms.'},
  {id:'t60', text:'근감소 경향 — ADAM8, BECN1, KLF4. 하체 근육량 유지·감소와 관련.', textEn:'Muscle Loss (Sarcopenia) Tendency — ADAM8, BECN1, KLF4. Related to the maintenance and loss of lower body muscle mass.'},
  {id:'t61', text:'종아리/하체 근육 발달 — ACTN3. 스프린트형, 하체 폭발력 쪽으로 매핑.', textEn:'Calf / Lower Body Muscle Dev. — ACTN3. Sprint type, mapped to lower body explosive power.'},
  {id:'t62', text:'지구력형 하체 체질 — ACE I/D variant. 산소 공급·혈관 조절, 하체 지구력과 연결.', textEn:'Endurance Lower Body Type — ACE I/D variant. Oxygen supply and vascular regulation, linked to lower body endurance.'},
  {id:'t63', text:'추위에 약한 하체 체감 — ACTN3. 열 발생·근육성 열 생산과 연결.', textEn:'Cold Sensitivity in Lower Body — ACTN3. Linked to thermogenesis and muscle heat production.'},
  {id:'t64', text:'엉덩이/골반 체형 — 다인자 유전. 골격 프레임, 지방 분포, 체형으로 분류 가능.', textEn:'Hip / Pelvis Body Shape — Polygenic inheritance. Can be classified by skeletal frame, fat distribution, and body type.'},
  {id:'t65', text:'허벅지 근육량 경향 — FTO, MC4R ACTN3. 체중 분포와 근육·지방 비율로 매핑 가능.', textEn:'Thigh Muscle Mass Tendency — FTO, MC4R, ACTN3. Can be mapped by weight distribution and muscle-to-fat ratio.'},
  {id:'t66', text:'피하지방 분포 — FTO, MC4R. 하체 비만형, 지방 저장 성향으로 분류 가능.', textEn:'Subcutaneous Fat Distribution — FTO, MC4R. Can be classified into lower body obesity type and fat storage tendency.'},
  {id:'t67', text:'발 크기/발 모양 — 다인자 유전. 골격형질이라 하반신 채우기용으로 좋음.', textEn:'Foot Size / Foot Shape — Polygenic inheritance. Skeletal trait, useful for supplementing lower body characteristics.'},
  {id:'t68', text:'발목 유연성 — 다인자 유전. 관절 탄성, 운동성으로 매핑 가능.', textEn:'Ankle Flexibility — Polygenic inheritance. Can be mapped by joint elasticity and mobility.'},
  {id:'t69', text:'무릎 통증 취약성 — 다인자 유전. 체형·연골·염증성 체질과 연동.', textEn:'Knee Pain Vulnerability — Polygenic inheritance. Linked to body type, cartilage, and inflammatory constitution.'},
  {id:'t70', text:'발바닥 압력/보행 패턴 — 복합유전. 발 구조와 보행 습관에 맞춤.', textEn:'Plantar Pressure / Gait Pattern — Complex inheritance. Tailored to foot structure and walking habits.'},
  {id:'t71', text:'발가락 길이 비율 — 다인자 유전. 2D:4D 같은 지표로도 확장 가능.', textEn:'Toe Length Ratio — Polygenic inheritance. Can be expanded to indicators like the 2D:4D ratio.'},
  {id:'t72', text:'다리 털/체모 농도 — 다인자 유전. 하체 외형 분류에 유용.', textEn:'Leg Hair / Body Hair Density — Polygenic inheritance. Useful for classifying lower body appearance.'},
  {id:'t73', text:'하지 혈관 반응성 — ACE 혈관조절 복합. 하체 순환, 냉감, 부종 쪽으로 연결 가능.', textEn:'Lower Limb Vascular Reactivity — ACE vascular complex. Can be linked to lower body circulation, coldness, and edema.'},
  {id:'t74', text:'하지 부종 — 순환·림프 관련 복합. 오래 서 있을 때 붓는 체질로 매핑.', textEn:'Lower Limb Edema — Circulation/Lymph complex. Mapped to a constitution that swells when standing for long periods.'},
  {id:'t75', text:'엉덩이-허벅지 비율 — 다인자 유전. 체형 분류용으로 꽤 유용.', textEn:'Hip-to-Thigh Ratio — Polygenic inheritance. Quite useful for body type classification.'},
  {id:'t76', text:'골반 폭 — 다인자 유전. 성별 차이·체형 차이를 넣기 좋음.', textEn:'Pelvis Width — Polygenic inheritance. Good for incorporating gender and body type differences.'},
  {id:'t77', text:'하지 관절 가동성 — COL계열 결합조직 복합. 무릎·발목·고관절 유연성.', textEn:'Lower Limb Joint Mobility — COL connective tissue. Flexibility of the knee, ankle, and hip joints.'},
];

// ══════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════
let currentLang = 'ko'; 

let holistic = null, lastResults = null, activeTrait = null;
let smoothedPos = {};
const LERP = 0.08;
let animFrame = 0;
let faceDetected = false;
let scatterPos = {};
let attachProgress = 0;
let scatterInit = false;
let listBuilt = false;

let faceScores = {};
let faceAnalyzed = false;

const FACE_LM = {
  TOP: 10, TOP_R: 338, TOP_L: 109, R_EYE: 33, L_EYE: 263,
  NOSE: 1, NOSE_L: 279, MOUTH: 13, MOUTH_R: 61, MOUTH_L: 291, MOUTH_B: 17,
  R_EAR: 234, L_EAR: 454, R_EAR_L: 177, L_EAR_R: 401, L_EAR_B: 397, L_EAR_T: 366,
  FOREHEAD: 151, FOREHEAD_R: 67, FOREHEAD_L: 297,
  CHEEK_R: 123, CHEEK_R2: 116, CHEEK_L: 352, CHEEK_B: 214, CHEEK_C: 266,
  TEMPLE_R: 162, TEMPLE_R2: 147, TEMPLE_L: 389, TEMPLE_B: 172,
  BRAIN_L: 54, BRAIN_R: 284, BRAIN_C: 10, BRAIN_CL: 71, BRAIN_CR: 301,
  BRAIN_CL2: 108, BRAIN_CR2: 337, BRAIN_CR3: 356, BRAIN_B: 152, BRAIN_T: 10,
};

window.toggleLang = function() {
  currentLang = currentLang === 'ko' ? 'en' : 'ko';
  document.getElementById('lang-btn').textContent = currentLang === 'ko' ? 'EN' : 'KR';

  if (currentLang === 'en') {
    document.body.classList.add('en-mode');
  } else {
    document.body.classList.remove('en-mode');
  }


  buildList(); 
  buildCenterText();

  const camSub = document.querySelector('.cam-overlay-sub');
  if (camSub) {
    camSub.innerHTML = currentLang === 'ko' 
      ? '카메라에 얼굴을 비춰주세요<br>유전형질이 분석됩니다' 
      : 'Please show your face to the camera<br>Genetic traits will be analyzed';
  }
};

function analyzeFace(landmarks, video) {
  if (faceAnalyzed) return;
  const lm = landmarks;
  const eyeDist = Math.hypot(lm[33].x - lm[263].x, lm[33].y - lm[263].y);
  const faceW   = Math.hypot(lm[234].x - lm[454].x, lm[234].y - lm[454].y);
  const eyeRatio = eyeDist / (faceW || 1); 
  const faceH = Math.hypot(lm[10].x - lm[152].x, lm[10].y - lm[152].y);
  const aspectRatio = faceW / (faceH || 1);
  const noseLen = Math.hypot(lm[1].x - lm[2].x, lm[1].y - lm[2].y) * 10;
  const mouthW = Math.hypot(lm[61].x - lm[291].x, lm[61].y - lm[291].y);
  const mouthRatio = mouthW / (faceW || 1);
  const foreheadH = Math.abs(lm[10].y - lm[151].y);
  const foreheadRatio = foreheadH / (faceH || 1);

  let skinBrightness = 0.5;
  try {
    const off = document.createElement('canvas');
    off.width = 40; off.height = 40;
    const octx = off.getContext('2d');
    octx.drawImage(video, 0, 0, 40, 40);
    const d = octx.getImageData(10, 10, 20, 20).data;
    let sum = 0;
    for (let i = 0; i < d.length; i += 4) sum += (d[i] * 0.299 + d[i+1] * 0.587 + d[i+2] * 0.114);
    skinBrightness = (sum / (d.length / 4)) / 255;
  } catch(e) {}

  const asymL = Math.abs(lm[33].x - (0.5 - (lm[454].x - 0.5)));
  const asymR = Math.abs(lm[263].x - (0.5 + (0.5 - lm[234].x)));
  const asymmetry = Math.min(1, Math.abs(asymL - asymR) * 20);

  faceScores = {
    't1':0.5, 't2':1-noseLen, 't3':0.5, 't4':0.5, 't5':skinBrightness<0.5?0.8:0.4, 't6':mouthRatio>0.45?0.75:0.4,
    't7':foreheadRatio>0.15?0.7:0.45, 't8':foreheadRatio, 't9':eyeRatio>0.45?0.75:0.4, 't10':noseLen, 't11':mouthRatio,
    't12':skinBrightness, 't13':aspectRatio>0.8?0.65:0.45, 't14':0.5, 't15':foreheadRatio, 't16':skinBrightness,
    't17':foreheadRatio>0.18?0.8:0.45, 't18':asymmetry, 't19':mouthRatio>0.42?0.7:0.4, 't20':aspectRatio<0.75?0.75:0.45,
    't21':skinBrightness<0.45?0.7:0.3, 't22':aspectRatio, 't23':asymmetry>0.5?0.7:0.4, 't24':foreheadRatio<0.12?0.7:0.35,
    't25':eyeRatio>0.47?0.8:0.35, 't26':noseLen>0.5?0.75:0.45, 't27':mouthRatio, 't28':mouthRatio>0.44?0.7:0.4,
    't29':0.5, 't30':foreheadRatio, 't31':aspectRatio<0.72?0.8:0.4, 't32':aspectRatio<0.72?0.75:0.45, 't33':mouthRatio>0.44?0.75:0.4,
    't34':0.5, 't35':asymmetry, 't36':aspectRatio, 't37':asymmetry>0.55?0.65:0.35, 't38':eyeRatio, 't39':skinBrightness,
    't40':foreheadRatio>0.16?0.8:0.45, 't41':eyeRatio, 't42':eyeRatio<0.4?0.7:0.4, 't43':foreheadRatio,
    't44':skinBrightness>0.6?0.4:0.75, 't45':eyeRatio, 't46':noseLen, 't47':aspectRatio<0.75?0.75:0.4, 't48':noseLen>0.45?0.75:0.4,
    't49':mouthRatio, 't50':mouthRatio, 't51':eyeRatio>0.46?0.75:0.4, 't52':asymmetry, 't53':asymmetry, 't54':foreheadRatio,
    't55':eyeRatio, 't56':skinBrightness, 't57':foreheadRatio, 't58':skinBrightness, 't59':asymmetry, 't60':aspectRatio<0.72?0.6:0.4,
    't61':aspectRatio<0.72?0.75:0.45, 't62':aspectRatio<0.75?0.7:0.45, 't63':skinBrightness<0.5?0.7:0.4, 't64':aspectRatio,
    't65':aspectRatio>0.8?0.65:0.45, 't66':aspectRatio>0.8?0.65:0.4, 't67':0.5, 't68':asymmetry, 't69':asymmetry>0.5?0.65:0.4,
    't70':0.5, 't71':eyeRatio, 't72':skinBrightness, 't73':skinBrightness<0.5?0.65:0.4, 't74':aspectRatio>0.8?0.6:0.4,
    't75':aspectRatio, 't76':aspectRatio>0.85?0.7:0.45, 't77':asymmetry,
  };
  faceAnalyzed = true;
  const overlay = document.getElementById('camOverlay');
  if (overlay) overlay.classList.add('hidden');
}

function getTraitScore(t) {
  const base = t.assoc;
  const faceBoost = faceScores[t.id] !== undefined ? (faceScores[t.id] - 0.5) * 4 : 0;
  return Math.max(1, base + faceBoost);
}

function getColor(t) { return CAT_C[t.cats[0]] || '#aaaaaa'; }

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${alpha})`;
}

// ══════════════════════════════════════════════
// SPIRAL SCROLL LOGIC
// ══════════════════════════════════════════════
function updateSpiral() {
  requestAnimationFrame(() => {
    const list = document.getElementById('tList');
    if (!list) return;

    const scrollTop = list.scrollTop;
    const listCenterY = list.clientHeight / 2;
    const radius = list.clientWidth * 0.18; 

    const items = list.querySelectorAll('.ti:not(.hidden-item)');
    
    items.forEach(el => {
      const itemCenterY = el.offsetTop + (el.offsetHeight / 2);
      const distFromCenter = (itemCenterY - scrollTop) - listCenterY;
      const angle = (distFromCenter / 150) * Math.PI;

      const x = Math.sin(angle) * radius; 
      const z = Math.cos(angle); 
      const depthRatio = (z + 1) / 2; 

      el.style.transform = `translate3d(${x}px, 0px, 0px)`;
      el.style.opacity = ''; 
      el.style.zIndex = Math.round(depthRatio * 100);
      el.style.pointerEvents = 'auto'; 
    });
  });
}

// ══════════════════════════════════════════════
// UI BUILDERS
// ══════════════════════════════════════════════
function applyFilter() {
  document.querySelectorAll('.ti').forEach(el => {
    el.classList.remove('hidden-item');
  });
  
  updateSpiral(); 
  updateTextHighlights(); 
  requestDrawLine();
}

function buildList() {
  const list = document.getElementById('tList');
  list.innerHTML = '';
  
  TRAITS.forEach(t => {
    const el = document.createElement('div');
    el.className = 'ti';
    el.id = 'li-' + t.id;
    el.dataset.cats = t.cats.join(',');
    
    const baseHex = CAT_C[t.cats[0]] || '#cccccc';
    el.style.setProperty('--cat-color', baseHex);
    el.style.setProperty('--cat-bg-hover', hexToRgba(baseHex, 0.25));
    
    const catColors = t.cats.map(c => hexToRgba(CAT_C[c] || '#cccccc', 1)); 
    let bgStyle = '';
    
    if (catColors.length === 1) {
      bgStyle = `background: ${catColors[0]};`; 
    } else {
      const step = 100 / catColors.length;
      let parts = [];
      catColors.forEach((color, i) => {
        parts.push(`${color} ${i * step}%`);
        parts.push(`${color} ${(i + 1) * step}%`);
      });
      bgStyle = `background: linear-gradient(to right, ${parts.join(', ')});`;
    }
    
    const displayName = currentLang === 'ko' ? t.name : (t.nameEn || t.name);
    
    el.innerHTML = `
      <div class="ti-name">${displayName}</div>
      <div class="ti-gene" style="${bgStyle} color: #000 !important; padding: 0.02rem 0.3rem; border-radius: 0; margin-left: 0.2rem;">${t.gene}</div>
    `;
    
    el.onmouseenter = () => selectTraitById(t.id, 'list');
    list.appendChild(el);
  });
  
  applyFilter();
  if (activeTrait) selectTraitById(activeTrait.id, 'list');
  
  setTimeout(() => {
    updateSpiral();
    requestDrawLine();
  }, 100);
}

// 👇 여기가 사라졌던 그 '가운데 글씨'를 불러오는 중요한 함수야!
function buildCenterText() {
  const box = document.getElementById('center-text-box');
  if (!box) return;
  box.innerHTML = '';
  
  CENTER_LINES.forEach(line => {
    const span = document.createElement('span');
    span.className = 'c-line';
    span.id = 'cline-' + line.id;
    
    const displayText = currentLang === 'ko' ? line.text : (line.textEn || line.text);
    span.textContent = displayText + ' ';
    
    const t = TRAITS.find(x => x.id === line.id);
    if (t) {
      const hex = CAT_C[t.cats[0]] || '#cccccc';
      span.style.setProperty('--cat-color', hex);
      span.style.setProperty('--cat-bg-hover', hexToRgba(hex, 0.3));
      span.onmouseenter = () => selectTraitById(t.id, 'text');
    }
    box.appendChild(span);
  });
  updateTextHighlights();
}

function updateTextHighlights() {
  const textBox = document.getElementById('center-text-box');
  if (!textBox) return;

  const hasHover = activeTrait !== null;
  if (hasHover) textBox.classList.add('has-active');
  else textBox.classList.remove('has-active');

  document.querySelectorAll('.c-line').forEach(el => {
    const tId = el.id.replace('cline-', '');
    const t = TRAITS.find(x => x.id === tId);
    if (!t) return;

    el.classList.remove('active', 'plei-related');
    el.style.removeProperty('background-color');

    if (hasHover) {
      if (activeTrait.id === tId) {
        el.classList.add('active');
      } else if (activeTrait.plei.includes(tId)) {
        el.classList.add('plei-related');
        el.style.backgroundColor = hexToRgba(CAT_C[t.cats[0]] || '#ccc', 0.5);
      }
    }
  });
}
// ══════════════════════════════════════════════
// MINIMAP DRAW (원본 1:1 완벽 맵핑)
// ══════════════════════════════════════════════
function drawMinimap() {
  const canvas = document.getElementById('minimap-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const cw = canvas.width, ch = canvas.height;
  
  ctx.clearRect(0, 0, cw, ch);
  
  TRAITS.forEach(t => {
    const isActive = activeTrait?.id === t.id;
    const isRelated = activeTrait && activeTrait.plei.includes(t.id);
    const fade = activeTrait && !isActive && !isRelated;
    
    // 🎯 꼼수(압축, 이동) 싹 다 빼고 순수 100% 원본 비율로 바로 꽂아버리기!
    const x = t.bodyPos.x * cw;
    const y = t.bodyPos.y * ch;
    
    ctx.beginPath();
    ctx.fillStyle = fade ? '#cccccc' : getColor(t);
    ctx.globalAlpha = fade ? 0.2 : (isActive || isRelated ? 1.0 : 0.8);
    const r = isActive ? 5 : (isRelated ? 4 : 2.5);
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    
    if (isActive || isRelated) {
      ctx.strokeStyle = getColor(t);
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(x, y, r + 4, 0, Math.PI * 2);
      ctx.stroke();
    }
  });
  ctx.globalAlpha = 1;
}
// ══════════════════════════════════════════════
// CONNECT LINE
// ══════════════════════════════════════════════
function drawConnectLine() {
  drawMinimap(); 

  const canvas = document.getElementById('connect-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ctx.setLineDash([]); 

  if (!activeTrait) return;

  const color = CAT_C[activeTrait.cats[0]] || '#000';
  const isMobile = window.innerWidth <= 1024;
  const li   = document.getElementById('li-' + activeTrait.id);
  const span = document.getElementById('cline-' + activeTrait.id);
  
  if (li && span) {
    const liR   = li.getBoundingClientRect();
    const spanR = span.getBoundingClientRect();
    const inView = (r) => r.bottom >= 0 && r.top <= window.innerHeight;
    
    if (inView(liR) && inView(spanR)) {
      const sx = isMobile ? liR.left + 40 : liR.right;
      const sy = isMobile ? liR.bottom : liR.top + liR.height / 2;
      const ex = isMobile ? spanR.left + 20 : spanR.left;
      const ey = isMobile ? spanR.top : spanR.top + spanR.height / 2;
      
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      if (isMobile) ctx.bezierCurveTo(sx, sy + 40, ex, ey - 40, ex, ey);
      else ctx.bezierCurveTo(sx + 40, sy, ex - 40, ey, ex, ey);
      
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = 0.7;
      ctx.stroke();
      ctx.globalAlpha = 1;
    }
  }

  if (activeTrait.plei.length === 0) return;
  const sourceEl = document.getElementById('li-' + activeTrait.id);
  if (!sourceEl) return;
  const sourceR = sourceEl.getBoundingClientRect();
  const sx2 = sourceR.right - 8, sy2 = sourceR.top + sourceR.height / 2;

  activeTrait.plei.forEach(pid => {
    const targetEl = document.getElementById('li-' + pid);
    if (!targetEl) return;
    const targetR = targetEl.getBoundingClientRect();
    const inView = (r) => r.bottom >= 0 && r.top <= window.innerHeight;
    if (!inView(sourceR) || !inView(targetR)) return;

    const tx2 = targetR.right - 8, ty2 = targetR.top + targetR.height / 2;
    const pt = TRAITS.find(x => x.id === pid);
    const tColor = pt ? (CAT_C[pt.cats[0]] || '#000') : color;
    const leftPanel = document.querySelector('.left-panel');
    const panelRight = leftPanel ? leftPanel.getBoundingClientRect().right : window.innerWidth;
    const bulge = Math.min(80, Math.abs(ty2 - sy2) * 0.5 + 30);
    const bulgeX = isMobile ? panelRight - 20 : panelRight + bulge;

    ctx.beginPath();
    ctx.moveTo(sx2, sy2);
    ctx.bezierCurveTo(bulgeX, sy2, bulgeX, ty2, tx2, ty2);

    const grad = ctx.createLinearGradient(sx2, sy2, tx2, ty2);
    grad.addColorStop(0, color);
    grad.addColorStop(1, tColor);
    ctx.strokeStyle = grad;
    ctx.lineWidth = 1.5;
    ctx.globalAlpha = 0.75;
    ctx.stroke();
    ctx.globalAlpha = 1;
  });
}

function requestDrawLine() { requestAnimationFrame(drawConnectLine); }

function selectTraitById(id, source = 'list') {
  const t = TRAITS.find(x => x.id === id); if (!t) return;
  activeTrait = t;

  document.querySelectorAll('.ti').forEach(el => {
    el.classList.remove('active', 'plei-related');
  });

  const li = document.getElementById('li-' + t.id);
  if (li) {
    li.classList.add('active');
    
    if (source === 'text') {
      const list = document.getElementById('tList');
      const targetScroll = li.offsetTop - (list.clientHeight / 2) + (li.offsetHeight / 2);
      list.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  }

  t.plei.forEach(pid => {
    const pleiLi = document.getElementById('li-' + pid);
    if (pleiLi) pleiLi.classList.add('plei-related');
  });

  updateTextHighlights(); 
  const target = document.getElementById('cline-' + id);
  if (target && source === 'list') target.scrollIntoView({behavior:'smooth', block:'center'});
  requestDrawLine();
}

function closeDet() {
  activeTrait = null;
  document.querySelectorAll('.ti').forEach(el => {
    el.classList.remove('active', 'plei-related');
  });
  updateTextHighlights(); 
  requestDrawLine();
}

// ══════════════════════════════════════════════
// SCATTER & MAIN CANVAS DRAW
// ══════════════════════════════════════════════
function initScatter(cw, ch) {
  if (scatterInit) return;
  const cx = cw * 0.5, cy = ch * 0.45;
  TRAITS.forEach(t => {
    const angle = Math.random() * Math.PI * 2;
    const dist  = 60 + Math.random() * Math.min(cw, ch) * 0.28;
    scatterPos[t.id+'_p'] = [cx + Math.cos(angle)*dist, cy + Math.sin(angle)*dist*0.65];
    scatterPos[t.id+'_s'] = [cx + Math.cos(angle+0.5)*(dist+20), cy + Math.sin(angle+0.5)*(dist+20)*0.65];
    if (!smoothedPos[t.id+'_p']) smoothedPos[t.id+'_p'] = [...scatterPos[t.id+'_p']];
    if (!smoothedPos[t.id+'_s']) smoothedPos[t.id+'_s'] = [...scatterPos[t.id+'_s']];
  });
  scatterInit = true;
}

function getLmPos(idKey, lmKey, res, cw, ch) {
  const face = res?.faceLandmarks, pose = res?.poseLandmarks;
  let raw = null;
  const POSE_MAP = {
    CHEST_C:  pose && {x:(pose[11].x+pose[12].x)/2, y:(pose[11].y+pose[12].y)/2},
    CHEST_R:  pose?.[12], CHEST_L: pose?.[11],
    CHEST_CL: pose && {x:(pose[11].x+pose[12].x)/2-0.04, y:(pose[11].y+pose[12].y)/2+0.05},
    CHEST_B:  pose && {x:(pose[11].x+pose[12].x)/2, y:(pose[11].y+pose[12].y)/2+0.1},
    STOMACH:  pose && {x:(pose[23].x+pose[24].x)/2, y:(pose[23].y+pose[24].y)/2},
    STOMACH_R:pose && {x:(pose[23].x+pose[24].x)/2+0.04, y:(pose[23].y+pose[24].y)/2},
    STOMACH_L:pose && {x:(pose[23].x+pose[24].x)/2-0.04, y:(pose[23].y+pose[24].y)/2},
    STOMACH_B:pose && {x:(pose[23].x+pose[24].x)/2, y:(pose[23].y+pose[24].y)/2+0.05},
    LOWER_C:  pose && {x:(pose[23].x+pose[24].x)/2, y:(pose[23].y+pose[24].y)/2+0.1},
    LOWER_L:  pose && {x:(pose[23].x+pose[24].x)/2-0.05, y:(pose[23].y+pose[24].y)/2+0.1},
    LOWER_R:  pose && {x:(pose[23].x+pose[24].x)/2+0.05, y:(pose[23].y+pose[24].y)/2+0.1},
    LIVER:    pose && {x:(pose[11].x+pose[12].x)/2+0.05, y:(pose[11].y+pose[12].y)/2+0.12},
    ARM_R:pose?.[14], ARM_R2:pose?.[16], ARM_L:pose?.[13], BACK_R:pose?.[12], BODY_C:pose?.[24],
  };
  if (POSE_MAP[lmKey] !== undefined) raw = POSE_MAP[lmKey];
  else if (FACE_LM[lmKey] !== undefined && face) raw = face[FACE_LM[lmKey]];
  if (!raw) raw = {x:0.5, y:0.4};

  const vid = document.getElementById('vid');
  const vidW = vid.videoWidth||1280, vidH = vid.videoHeight||720;
  const vidRatio = vidW/vidH, canRatio = cw/ch;
  let scaleX, scaleY, offsetX=0, offsetY=0;
  if (vidRatio > canRatio) { scaleY=1; scaleX=canRatio/vidRatio; offsetX=(1-scaleX)/2; }
  else { scaleX=1; scaleY=vidRatio/canRatio; offsetY=(1-scaleY)/2; }

  const px = ((1-raw.x)*scaleX + offsetX) * cw;
  const py = (raw.y*scaleY + offsetY) * ch;
  if (!smoothedPos[idKey]) smoothedPos[idKey] = [px, py];
  const lr = LERP * (0.3 + attachProgress * 0.7);
  smoothedPos[idKey][0] += (px - smoothedPos[idKey][0]) * lr;
  smoothedPos[idKey][1] += (py - smoothedPos[idKey][1]) * lr;
  return smoothedPos[idKey];
}

function drawDotsOnly(ctx) {
  TRAITS.forEach(t => {
    if (!smoothedPos[t.id+'_p']) return;
    const [x,y] = smoothedPos[t.id+'_p'];
    const pulse = 0.3 + 0.25 * Math.sin(animFrame*0.04 + t.id.charCodeAt(1)*0.7);
    ctx.globalAlpha = pulse;
    ctx.fillStyle = getColor(t);
    ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI*2); ctx.fill();
    ctx.globalAlpha = 1;
  });
}

function drawAll(canvas, pCanvas, res) {
  const ctx = canvas.getContext('2d'), pctx = pCanvas.getContext('2d');
  const cw = canvas.width, ch = canvas.height;
  ctx.clearRect(0,0,cw,ch); pctx.clearRect(0,0,cw,ch);
  animFrame++;
  initScatter(cw, ch);
  faceDetected = !!(res?.faceLandmarks);
  attachProgress += ((faceDetected?1:0) - attachProgress) * 0.04;

  if (faceDetected && !faceAnalyzed && res.faceLandmarks) {
    analyzeFace(res.faceLandmarks, document.getElementById('vid'));
  }

  if (!faceDetected) {
    TRAITS.forEach(t => {
      ['p','s'].forEach(sfx => {
        const k = t.id+'_'+sfx;
        if (!smoothedPos[k]) smoothedPos[k] = [...scatterPos[k]];
        smoothedPos[k][0] += (scatterPos[k][0] - smoothedPos[k][0]) * 0.06;
        smoothedPos[k][1] += (scatterPos[k][1] - smoothedPos[k][1]) * 0.06;
        scatterPos[k][0] += (Math.random()-0.5)*1.2;
        scatterPos[k][1] += (Math.random()-0.5)*0.8;
      });
    });
  }

  if (!faceDetected && attachProgress < 0.02) { 
    drawDotsOnly(ctx); 
    drawMinimap();
    return; 
  }

  const drawnPairs = new Set();
  TRAITS.forEach(t => {
    const isActive = activeTrait?.id === t.id;
    const isRelated = activeTrait && activeTrait.plei.includes(t.id);
    if (activeTrait && !isActive && !isRelated) return;

    const [ax,ay] = getLmPos(t.id+'_p', t.lm, res, cw, ch);

    t.plei.forEach(pid => {
      const pt = TRAITS.find(x=>x.id===pid);
      if (!pt) return;
      const key = [t.id,pid].sort().join('-');
      if (drawnPairs.has(key)) return;
      drawnPairs.add(key);
      const [bx,by] = getLmPos(pt.id+'_p', pt.lm, res, cw, ch);

      pctx.beginPath();
      pctx.strokeStyle = getColor(t);
      pctx.setLineDash([]); 
      if (isActive || isRelated) {
        pctx.lineWidth = 4.5;  
        pctx.globalAlpha = 0.9;
      } else if (!activeTrait) {
        pctx.lineWidth = 2.5;  
        pctx.globalAlpha = 0.45;
      }
      pctx.moveTo(ax,ay); pctx.lineTo(bx,by); pctx.stroke();
    });
  });
  pctx.globalAlpha = 1;

  TRAITS.forEach(t => {
    const isActive = activeTrait?.id === t.id;
    const isRelated = activeTrait && activeTrait.plei.includes(t.id);
    if (activeTrait && !isActive && !isRelated) return;

    const color = getColor(t), score = getTraitScore(t);
    const baseR = 1.8 + score * 0.8; 
    const r = isActive ? baseR*1.4 : (isRelated ? baseR*1.2 : baseR);
    
    const [x1,y1] = getLmPos(t.id+'_p', t.lm, res, cw, ch);
    let drawX=x1, drawY=y1;

    if (t.lm2) {
      const [x2,y2] = getLmPos(t.id+'_s', t.lm2, res, cw, ch);
      ctx.beginPath(); ctx.strokeStyle=color;
      ctx.lineWidth=isActive?3:2; 
      ctx.globalAlpha=(isActive?0.5:0.12);
      ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();
      ctx.globalAlpha=(isActive?0.2:0.06);
      ctx.fillStyle=color;
      ctx.beginPath(); ctx.arc(x1,y1,r*0.5,0,Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.arc(x2,y2,r*0.5,0,Math.PI*2); ctx.fill();
      const blink=isActive?15:40;
      const isPrimary=(Math.floor(animFrame/blink)+t.id.charCodeAt(1))%2===0;
      drawX=isPrimary?x1:x2; drawY=isPrimary?y1:y2;
    }

    ctx.globalAlpha = 1.0; ctx.fillStyle = color;
    ctx.beginPath(); ctx.arc(drawX, drawY, r, 0, Math.PI*2); ctx.fill();

    if (isActive||isRelated||t.assoc>=4) {
      ctx.globalAlpha = isActive ? 1.0 : 0.85;
      ctx.font = `800 ${isActive ? 14 : 11}px "JetBrains Mono", "Spoqa Han Sans Neo", sans-serif`;
      ctx.textBaseline = 'middle';
      const tx = drawX + r + 5; 
      ctx.lineJoin = 'round'; ctx.lineWidth = 0.3; ctx.strokeStyle = 'rgba(0,0,0,1)';
      ctx.strokeText(t.gene, tx, drawY);
      ctx.fillStyle = color; ctx.fillText(t.gene, tx, drawY);
    }
    ctx.globalAlpha = 1;
  });

  drawMinimap();
}

function resizeCanvases() {
  const container = document.querySelector('.cam-widget');
  if (container) {
    const w = container.clientWidth, h = container.clientHeight;
    ['overlay','plei-canvas'].forEach(id => {
      const c = document.getElementById(id);
      if (!c) return;
      c.width=w; c.height=h;
      c.style.width=w+'px'; c.style.height=h+'px';
    });
  }

  const mmC = document.getElementById('minimap-canvas');
  if (mmC) {
    mmC.width = mmC.clientWidth;
    mmC.height = mmC.clientHeight;
  }
  
  requestDrawLine();
}

function saveSnapshot() {
  const vid=document.getElementById('vid'), overlay=document.getElementById('overlay'), plei=document.getElementById('plei-canvas');
  const out=document.createElement('canvas');
  out.width=overlay.width; out.height=overlay.height;
  const octx=out.getContext('2d');
  octx.save(); octx.scale(-1,1);
  octx.drawImage(vid,-out.width,0,out.width,out.height);
  octx.restore();
  octx.drawImage(plei,0,0);
  octx.drawImage(overlay,0,0);
  const a=document.createElement('a');
  a.href=out.toDataURL('image/png');
  a.download=`genetic_map_${Date.now()}.png`;
  a.click();
}

async function initSystem() {
  if (!document.getElementById('minimap-wrap')) {
    const mmWrap = document.createElement('div');
    mmWrap.id = 'minimap-wrap';
    mmWrap.innerHTML = `
      <div class="minimap-bg"></div>
      <canvas id="minimap-canvas"></canvas>
    `;
    document.body.appendChild(mmWrap);

    mmWrap.addEventListener('click', () => {
      mmWrap.classList.toggle('expanded');
      setTimeout(resizeCanvases, 450); 

      
    });
// 🎯 [에디터 모드] 마우스로 점 멱살 잡고 끌어다 놓기 (Drag & Drop)
  const mmCanvas = document.getElementById('minimap-canvas');
  let dragTrait = null;

  if (mmCanvas) {
    mmCanvas.addEventListener('mousedown', (e) => {
      const rect = mmCanvas.getBoundingClientRect();
      const clickX = (e.clientX - rect.left) / rect.width;
      const clickY = (e.clientY - rect.top) / rect.height;
      
      let minDist = 0.05; // 마우스 인식 범위 (클릭한 곳에서 가장 가까운 점 찾기)
      TRAITS.forEach(t => {
        const dist = Math.hypot(t.bodyPos.x - clickX, t.bodyPos.y - clickY);
        if (dist < minDist) { minDist = dist; dragTrait = t; }
      });
    });

    mmCanvas.addEventListener('mousemove', (e) => {
      if (!dragTrait) return; // 잡은 점이 없으면 무시
      const rect = mmCanvas.getBoundingClientRect();
      
      // 마우스를 따라 점의 x, y 좌표가 실시간으로 변함
      dragTrait.bodyPos.x = (e.clientX - rect.left) / rect.width;
      dragTrait.bodyPos.y = (e.clientY - rect.top) / rect.height;
      
      requestDrawLine(); // 변경된 위치로 화면 즉시 렌더링
    });

    mmCanvas.addEventListener('mouseup', () => { dragTrait = null; });
    mmCanvas.addEventListener('mouseleave', () => { dragTrait = null; });

    // 🎯 맵핑을 다 끝내고 "더블 클릭"하면 코드가 완성됨!
    mmCanvas.addEventListener('dblclick', () => {
      // 콘솔창에 복사하기 쉽게 출력
      let output = "const TRAITS = [\n";
      TRAITS.forEach(t => {
        output += `  {id:'${t.id}', cats:['${t.cats.join("','")}'], name:'${t.name}', nameEn:'${t.nameEn}', gene:'${t.gene}', lm:'${t.lm}', lm2:${t.lm2 ? "'"+t.lm2+"'" : null}, assoc:${t.assoc}, vis:'${t.vis}', bodyPos:{x:${t.bodyPos.x.toFixed(3)}, y:${t.bodyPos.y.toFixed(3)}}, plei:[${t.plei.map(p=>"'"+p+"'").join(',')}]},\n`;
      });
      output += "];";
      
      console.log("👇 아래 코드를 복사해서 script.js의 TRAITS 배열에 통째로 덮어쓰세요! 👇");
      console.log(output);
      alert("F12(개발자 도구) 콘솔창을 열면 업데이트된 코드가 있습니다!\n복사해서 원본에 덮어쓰기 하세요.");
    });
  }
} // 👈 원래 있던 initSystem() 함수의 마지막 닫는 괄호


  if (!document.getElementById('ppl-png')) {
    const pplImg = document.createElement('img');
    pplImg.id = 'ppl-png';
    pplImg.src = 'ppl.png';
    document.body.appendChild(pplImg);
  }

  // 👇 여기서 처음 화면이 열릴 때 buildList와 buildCenterText가 차례대로 실행됨!
  if (!listBuilt) {
    buildList();
    buildCenterText();
    listBuilt = true;
  }
  
  resizeCanvases();
  window.addEventListener('resize', resizeCanvases);

  const tListEl = document.getElementById('tList');
  if (tListEl) {
    tListEl.addEventListener('scroll', () => {
      requestAnimationFrame(() => {
        updateSpiral();
        drawConnectLine();
      });
    });
  }

  const textBoxEl = document.getElementById('center-text-box');
  if (textBoxEl) textBoxEl.addEventListener('scroll', requestDrawLine);

  const video  = document.getElementById('vid'),
        canvas = document.getElementById('overlay'),
        pCanvas= document.getElementById('plei-canvas'),
        status = document.getElementById('face-status');

  holistic = new Holistic({locateFile: f=>`https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${f}`});
  holistic.setOptions({modelComplexity:1, smoothLandmarks:true, minDetectionConfidence:0.5, minTrackingConfidence:0.5});
  holistic.onResults(res => {
    lastResults = res;
    status.textContent = res.faceLandmarks ? 'FACE DETECTED' : 'SCANNING...';
    drawAll(canvas, pCanvas, res);
  });

  const cam = new Camera(video, {
    onFrame: async () => { await holistic.send({image:video}); },
    width: 1280, height: 720
  });
  cam.start().catch(() => { status.textContent = 'CAM ERROR'; });

  const tListContainer = document.querySelector('.trait-list-container');
  if (tListContainer) tListContainer.addEventListener('mouseleave', closeDet);
  if (textBoxEl) textBoxEl.addEventListener('mouseleave', closeDet);

  const camWidget = document.getElementById('camWidget');
  if (camWidget) {
    camWidget.addEventListener('click', () => {
      camWidget.classList.toggle('expanded');
      
      const mmWrap = document.getElementById('minimap-wrap');
      if (mmWrap) {
        if (camWidget.classList.contains('expanded')) {
          mmWrap.classList.add('visible');
        } else {
          mmWrap.classList.remove('visible');
        }
      }
      setTimeout(resizeCanvases, 450);
    });
  }
}

window.addEventListener('DOMContentLoaded', initSystem);
