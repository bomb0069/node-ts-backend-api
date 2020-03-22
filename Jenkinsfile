pipeline {
   agent any

   stages {
      stage('Source Code Build') {
         steps {
            sh label: '', script: 'npm install'
            sh label: '', script: 'npm run build'
         }
      }
      stage('Run Static Code Analysis') {
         steps {
            sh label: '', returnStatus: true, script: '''npm run lint -- --quiet --format=checkstyle --output-file=reports/checkstyle.xml
            npm audit --fix'''
            recordIssues(tools: [esLint(pattern: 'reports/checkstyle.xml')])
         }
      }
      stage('Run Automated Unit Tests') {
         steps {
            sh label: '', script: 'npm test'
            junit 'reports/junit.xml'
            recordIssues(tools: [junitParser(pattern: 'reports/junit.xml')])
         }
      }
      stage('Code Coverage Analysis') {
         steps {
            cobertura autoUpdateHealth: false, autoUpdateStability: false, coberturaReportFile: 'coverage/cobertura-coverage.xml', conditionalCoverageTargets: '70, 0, 0', failUnhealthy: false, failUnstable: false, lineCoverageTargets: '80, 0, 0', maxNumberOfBuilds: 0, methodCoverageTargets: '80, 0, 0', onlyStable: false, sourceEncoding: 'ASCII', zoomCoverageChart: false
         }
      }
   }
}
