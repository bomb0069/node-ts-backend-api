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
            sh label: '', returnStatus: true, script: '''npm run lint -- --quiet --format=checkstyle --output-file=reports/checkstyle.xml'''
            recordIssues(tools: [esLint(pattern: 'reports/checkstyle.xml')])
            sh label: '', returnStatus: true, script: '''npm audit --json'''
            //dependencyCheck additionalArguments: '--out=reports', odcInstallation: 'Node Dependency Checker'
            //dependencyCheckPublisher failedNewCritical: 1, failedNewHigh: 1, failedNewLow: 1, failedNewMedium: 1, failedTotalCritical: 1, failedTotalHigh: 1, failedTotalLow: 1, failedTotalMedium: 1, pattern: 'reports/dependency-check-report.xml'
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
