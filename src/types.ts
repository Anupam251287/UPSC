export enum Paper {
  PAPER_1 = "Paper I: Fundamentals of Sociology",
  PAPER_2 = "Paper II: Indian Society: Structure and Change"
}

export interface Topic {
  id: string;
  title: string;
  paper: Paper;
  category: string;
  subtopics: string[];
  thinkers: string[];
  dependencyIds?: string[];
  pyqFrequency: "High" | "Medium" | "Low";
}

export interface Thinker {
  name: string;
  era: string;
  perspective: string;
  works: string[];
  keyConcepts: string[];
  paper: Paper[];
}

export const SYLLABUS: Topic[] = [
  // Paper 1
  {
    id: "p1-t1",
    title: "Sociology - The Discipline",
    paper: Paper.PAPER_1,
    category: "Fundamentals",
    subtopics: ["Modernity and social changes in Europe", "Emergence of Sociology", "Scope of the subject", "Sociology and Common sense"],
    thinkers: ["Auguste Comte", "Herbert Spencer"],
    pyqFrequency: "High"
  },
  {
    id: "p1-t2",
    title: "Sociology as Science",
    paper: Paper.PAPER_1,
    category: "Methodology",
    subtopics: ["Science, scientific method and critique", "Major theoretical strands of research methodology", "Positivism and its critique", "Fact value and objectivity", "Non-positivist methodologies"],
    thinkers: ["Max Weber", "Karl Popper", "Thomas Kuhn"],
    pyqFrequency: "Medium"
  },
  {
    id: "p1-t4",
    title: "Sociological Thinkers",
    paper: Paper.PAPER_1,
    category: "Theories",
    subtopics: ["Karl Marx", "Emile Durkheim", "Max Weber", "Talcott Parsons", "Robert K. Merton", "Mead"],
    thinkers: ["Marx", "Durkheim", "Weber", "Parsons", "Merton", "Mead"],
    pyqFrequency: "High"
  },
  {
    id: "p1-t5",
    title: "Stratification and Mobility",
    paper: Paper.PAPER_1,
    category: "Structure",
    subtopics: ["Concepts", "Theories", "Dimensions", "Social mobility"],
    thinkers: ["Melvin Tumin", "Davis & Moore", "Erik Olin Wright"],
    pyqFrequency: "High"
  },
  // Paper 2
  {
    id: "p2-t1",
    title: "Introducing Indian Society",
    paper: Paper.PAPER_2,
    category: "Perspectives",
    subtopics: ["Indology (G.S. Ghurye)", "Structural functionalism (M.N. Srinivas)", "Marxist sociology (A.R. Desai)"],
    thinkers: ["G.S. Ghurye", "M.N. Srinivas", "A.R. Desai"],
    pyqFrequency: "High"
  },
  {
    id: "p2-t2",
    title: "Caste System",
    paper: Paper.PAPER_2,
    category: "Structure",
    subtopics: ["Perspectives on the study of caste system", "Features of caste system", "Untouchability"],
    thinkers: ["Ambedkar", "Louis Dumont", "Srinivas"],
    pyqFrequency: "High"
  }
];

export const THINKERS: Thinker[] = [
  {
    name: "Karl Marx",
    era: "Classical",
    perspective: "Conflict Theory",
    works: ["The Communist Manifesto", "Das Kapital"],
    keyConcepts: ["Historical Materialism", "Mode of Production", "Alienation", "Class Struggle"],
    paper: [Paper.PAPER_1, Paper.PAPER_2]
  },
  {
    name: "Emile Durkheim",
    era: "Classical",
    perspective: "Functionalism",
    works: ["The Division of Labour in Society", "Suicide", "The Elementary Forms of Religious Life"],
    keyConcepts: ["Social Fact", "Division of Labour", "Anomie", "Collective Conscience", "Sacred and Profane"],
    paper: [Paper.PAPER_1]
  },
  {
    name: "Max Weber",
    era: "Classical",
    perspective: "Interpretive Sociology",
    works: ["The Protestant Ethic and the Spirit of Capitalism", "Economy and Society"],
    keyConcepts: ["Social Action", "Ideal Types", "Authority", "Bureaucracy", "Verstehen"],
    paper: [Paper.PAPER_1]
  },
  {
    name: "M.N. Srinivas",
    era: "Modern Indian",
    perspective: "Structural-Functionalism",
    works: ["The Remembered Village", "Social Change in Modern India"],
    keyConcepts: ["Sanskritization", "Westernization", "Dominant Caste", "Secularization"],
    paper: [Paper.PAPER_2]
  }
];
