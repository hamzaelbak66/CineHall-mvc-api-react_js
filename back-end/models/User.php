<?php
class User extends database{

    function register($token,$nom,$email){
        $sql = "INSERT INTO `user`(`token`, `nom`, `email`) VALUES (:token,:nom,:email)";
        $stmt=$this->db()->prepare($sql);
        $stmt->bindParam(':token', $token);
        $stmt->bindParam(':nom', $nom);
        $stmt->bindParam(':email', $email);
        $stmt->execute();
            // return $token;
        
    }

    function login($token){
        $feedback=[
            'isTrue'=>false
        ];
        $sql = "SELECT token ,`nom`, `email` FROM `user` WHERE `token`=:token";
        $stmt=$this->db()->prepare($sql);
        $stmt->bindParam(':token', $token);
        $stmt->execute();
        if($stmt->rowCount()==1){
            $res=$stmt->fetch();
            $feedback=[
                // 'isTrue'=>true,
                'token'=>$res['token'],
                'nom'=>$res['nom'],
                'email'=>$res['email'],
            ];
            return $feedback;
        }
        else{
            return $feedback;
        }
    }
    
}