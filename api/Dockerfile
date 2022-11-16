FROM public.ecr.aws/lambda/nodejs:18

# https://www.alexandraulsh.com/2018/06/25/docker-npmrc-security/
COPY index.js package.json .npmrc node_modules/**/*.js ${LAMBDA_TASK_ROOT}

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "index.handler" ]
