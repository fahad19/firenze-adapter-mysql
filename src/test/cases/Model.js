/* global describe, before, after, it */
/* eslint-disable no-unused-expressions */

var should = require('should-promised'); //eslint-disable-line
var lib = require('firenze');
var config = require('../config');

describe('Model', function () {
  before(function (done) {
    this.db = new lib.Database(config);

    this.Posts = require('../collections/Posts')(this.db);
    this.postsData = require('../fixtures/posts');

    this.Authors = require('../collections/Authors')(this.db);
    this.authorsData = require('../fixtures/authors');

    this.db.getAdapter().loadAllFixtures([
      {
        collection: new this.Posts(),
        rows: this.postsData
      },
      {
        collection: new this.Authors(),
        rows: this.authorsData
      }
    ]).then(function () {
      done();
    }).catch(function (error) {
      throw error;
    });
  });

  after(function (done) {
    this.db.close().then(done);
  });

  it('should fetch itself', function (done) {
    var posts = new this.Posts();
    var post = posts.model({
      id: 2
    });
    post.fetch().then(function (model) {
      model.get('title').should.be.exactly('About');
      done();
    }).catch(function (error) {
      throw error;
    });
  });

  it('should create a new record', function (done) {
    var posts = new this.Posts();
    var post = posts.model({
      title: 'New Post',
      body: 'text...'
    });
    post.save().then(function (model) {
      model.get('title').should.eql('New Post');
      done();
    }).catch(function (error) {
      throw error;
    });
  });

  it('should update existing record', function (done) {
    var posts = new this.Posts();
    var post = posts.model({id: 1});
    post.fetch().then(function (model) {
      model.set('title', 'Hello Universe');
      model.save().then(function (m) {
        m.get('title').should.eql('Hello Universe');
        done();
      });
    });
  });

  it('should update particular field', function (done) {
    var posts = new this.Posts();
    var post = posts.model({id: 1});
    post.fetch().then(function (model) {
      model.saveField('title', 'Hello Universe').then(function (m) {
        m.get('title').should.eql('Hello Universe');
        done();
      });
    });
  });

  it('should delete a record', function (done) {
    var posts = new this.Posts();
    var post = posts.model({id: 2});
    post.delete().then(function (affectedRows) {
      affectedRows.should.eql(1);
      done();
    });
  });
});
