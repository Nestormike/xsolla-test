export class Project {
    id;
    name;

    static parse(obj) {
        const project = new Project();

        project.id = obj.id;
        project.name = obj.name;
        
        return project;
    }
}