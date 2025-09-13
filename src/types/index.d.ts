export interface IProject {
    slug?: string;
    title?: string;
    description?: string;
    coverImage?: string;
    images?: string[];
    tags?: string[];
    links?: { demo?: string; repo?: string };
}

export interface ISkillGroup {
    [key: string]: ISkill[];
}

export interface ISkill {
    name?: string;
    icon?: string;
}
