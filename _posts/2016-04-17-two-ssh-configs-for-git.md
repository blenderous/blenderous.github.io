---
layout: post
title: "SSH config for two separate git repository accounts"
description: "Working with two separate git repositories."
date: 2016-04-17
comments: true
---
This is an example of the SSH config you would want to use when you have two accounts to manage your git repositories. The one I use is a private repository based in gitlab and the other, a public repository in github.

To connect to the private repository through SSH, follow these steps:

1. If you are on windows, I recommend using Git Bash since it already has `ssh-keygen` pre-installed
2. Generate an ssh key with the email id associated with the private repository.
```
    ssh-keygen -t rsa -C "email@private.company"
```
This will take you through a series of steps.
Make sure you assign a good name for your key, like `id_rsa_private_repo`
3. If the above command doesn't work, You might have to do this first (to run `ssh-agent`)
```
eval `ssh-agent -s`
```
4. Copy your public key.
```
    type %your_home_folder%\.ssh\id_rsa_private_repo.pub | clip
```
Add this to the list of SSH keys in your private repository website.
5. Generate another key for your github repository, which could be named `id_rsa_github` for example.
6. Since these keys don't have the default name, they have to be added using `ssh-add`
```
ssh-add ~/.ssh/id_rsa_private_repo
ssh-add ~/.ssh/id_rsa_github
```
7. Create a `config` file in your `.ssh` directory inside your home folder. It should look something like this:

        # Private repository account
        Host privateRepo
            HostName base.url.to.private.repository
            User git
            RSAAuthentication yes
            IdentityFile ~/.ssh/id_rsa_private_repo

        # Github account
        Host github
            HostName github.com
            User git
            RSAAuthentication yes
            IdentityFile ~/.ssh/id_rsa_github

8. Now, when you need to clone a project from the private repository, you will have to
`git clone privateRepo:project_name.git`
9. Now, before you can make changes, commit, make pushes or pulls, you will have to add this repo address to origin.
`git remote add origin privateRepo:project_name.git`
