const chai = require('chai');
const gulpJenkins = require('../');

describe('Gulp Jenkins', function() {

  it('should exist', function() {
    chai.expect(gulpJenkins).to.exist;
  });

  it('should have required methods', function() {
    const methods = [
      'init',
      'all_jobs',
      'job_info',
      'enable_job',
      'disable_job',
      'build',
      'stop_build',
      'build_info',
      'last_build_info',
      'last_build_report',
      'get_config_xml',
      'copy_job',
      'delete_job',
      'last_success',
      'last_result',
      'job_output',
      'queue',
      'computers'
    ];

    methods.forEach(m => chai.expect(gulpJenkins[m]).to.exist);
    methods.forEach(m => chai.expect(gulpJenkins[m]).to.be.instanceof(Function));
  });
});
