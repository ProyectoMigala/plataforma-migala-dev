import { Pipe, PipeTransform } from '@angular/core';
const { isArray } = Array;

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(posts: any[], find: string): any[] {
        if (!posts) return [];
        if (!find) return posts;
        find = find.toLowerCase();
        return search(posts, find);
    }
}

function search(entries: any[], search: string) {

    search = search.toLowerCase();

    return entries.filter(function (obj) {
        const keys: string[] = Object.keys(obj);
        return keys.some(function (key) {
            const value = obj[key];
            if (isArray(value)) {
                return value.some(v => {
                    return v.toLowerCase().includes(search);
                });
            } else {
                return value.toLowerCase().includes(search);
            }
        })
    });
}