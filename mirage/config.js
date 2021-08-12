import mockAdverts from "./mock/data" ;

export default function() {
  this.namespace = '/api';

  this.get('/adverts', function(db, request) {
    if(request.queryParams.sort_by !== undefined) {
      mockAdverts.sort((a,b) => b[request.queryParams.sort_by] - a[request.queryParams.sort_by] )
    }
    if(request.queryParams.filter !== undefined) {
      let filteredAdverts = mockAdverts.filter(function(i) {
        return request.queryParams.filter.includes(String(i.type));
      });
      return { adverts: filteredAdverts.slice(0, 50) };
    } else {
      return { adverts: mockAdverts.slice(0, 50) };
    }
  });
}
